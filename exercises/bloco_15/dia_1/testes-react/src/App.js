/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            type="email"
            value={email}
            onChange={(e) => this.changeEmail(e.target.value)}
          />
        </label>
        <input
          id="btn-send"
          type="button"
          data-testId="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id="btn-back" type="button" value="Voltar" />
        {/* <h2 data-testId="id-email-user">{`Valor: ${saveEmail}`}</h2> */}
        <ValidEmail email={saveEmail} />
      </div>
    );
  }
}

export default App;
