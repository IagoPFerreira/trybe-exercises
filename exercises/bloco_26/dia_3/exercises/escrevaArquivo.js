const { writeFileSync } = require('fs');

function escrevaArquivo(arquivo, texto) {
  writeFileSync(`${__dirname}/${arquivo}`, texto);

  return 'ok';
}

module.exports = escrevaArquivo;