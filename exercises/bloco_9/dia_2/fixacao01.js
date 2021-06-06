const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11)

  number <= 5 ? reject(console.log(`Que fracasso =( Nosso número foi ${number}`)) : resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});