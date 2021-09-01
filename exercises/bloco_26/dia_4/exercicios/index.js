const express = require('express');

const app = express();

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.listen(3000, () => console.log('O pai ta on na 3000'))