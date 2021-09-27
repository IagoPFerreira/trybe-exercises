const jwt = require('jsonwebtoken');
const Joi = require('joi');

const SECRET = process.env.SECRET;

const validateBody = (body) => Joi.object({
  username: Joi.string().min(5).alphanum().required(),
  password: Joi.string().min(5).required(),
}).validate(body);

module.exports = (req, res, next) => {
  try {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({ message: 'Os campos de usuário e senha precisam ser preenchidos!'});
  }

  const { error } = validateBody(req.body);

  if (error) return next(error);

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256'
  }

  let admin = false;

  if (username === 'admin') {
    admin = true;
  }

  const token = jwt.sign({ user: username, admin }, SECRET, jwtConfig);

  return res.status(200).json({ token });

  } catch (err) {
    return res.status(404).json({ message: 'Erro interno', error: err.message })
  }
}
