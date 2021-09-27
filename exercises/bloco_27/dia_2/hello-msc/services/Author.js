const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um autor com o id ${id}`,
      },
    };
  };

  Author.findById(id);
}

const create = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alredyExists',
        message: 'Um autor já existe com esse nome completo',
      },
    };
  };

  return Author.create(firstName, middleName, lastName);
}

module.exports = {
  getAll,
  findById,
  create
};
