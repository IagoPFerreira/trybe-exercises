const getRepos = require('./ex04.js');

describe('Testa os repositórios', () => {
  it('Verifica se os repositórios "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator" se encontram no repositório da URL "https://api.github.com/orgs/tryber/repos"', async () => {
    const repos = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(repos).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});
