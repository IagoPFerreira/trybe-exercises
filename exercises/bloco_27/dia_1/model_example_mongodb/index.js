const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Books = require('./models/Book');

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id)

  if (!author) return res.status(404).json({ message: 'Author not found!' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!Author.isValid(firstName, middleName, lastName)) {
    return res.status(404).json({ message: 'Dados inválidos' });
  }

  await Author.create(firstName, middleName, lastName);

  res.status(201).json({ message: 'Autor cadastrado com sucesso!' });
});

app.put('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, middleName, lastName } = req.body;

  await Author.removeCampo(id, firstName, middleName, lastName);

  res.status(200).json({ message: 'Campo removido com sucesso!' });
})

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getBookById(id)

  if (!book) return res.status(404).json({ message: 'Book not found!'});

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  await Books.create(title, author_id);

  res.status(200).json({ message: 'Livro cadastrado com sucesso!' });
});

app.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author_id } = req.body;

  await Books.update(id, title, author_id);

  res.status(200).json({ message: 'Livro atualizado com sucesso!' });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
})