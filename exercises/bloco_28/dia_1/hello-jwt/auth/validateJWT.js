const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = (req, res, next) => {
  const token = req.headers['autorizathion'];

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);

    const {_password, ...userWithoutPassword } = decoded;

    req.user = { userWithoutPassword };

    return next()

  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}