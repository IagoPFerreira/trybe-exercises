/* eslint-disable react/jsx-filename-extension */
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name="nome"
            data-testId="input-nome"
            value={nome}
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(e) => this.handleInput(e)}
            name="email"
            data-testId="input-email"
            value={email}
          />
        </p>
      </div>
    );
  }
}

export default App;
