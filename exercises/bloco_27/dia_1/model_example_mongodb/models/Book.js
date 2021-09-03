const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

const getBookById = async (id) => {
  if (!ObjectId(id)) return null;

  const bookData = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!bookData) return null;

  return bookData;
}

const create = async (title,  author_id) => connection()
  .then((db) => db.collection('books').insertOne({ title, author_id }));

const update = async (id, title, author_id) => connection()
    .then((db) => db.collection('books').updateOne(
      {_id: ObjectId(id)}, 
      { $set: {
        "author_id": author_id,
        "title": title,
      }}
    ));

module.exports = {
  getAll,
  getBookById,
  create,
  update
}
