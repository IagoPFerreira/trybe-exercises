const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books;',
  );

  return books;
};

const getBookById = async (id) => {
  const [book] = await connection.execute(
    'SELECT title, author_id FROM model_example.books WHERE author_id = ?', [id]
  );

  return book;
}

module.exports = {
  getAll,
  getBookById
}
