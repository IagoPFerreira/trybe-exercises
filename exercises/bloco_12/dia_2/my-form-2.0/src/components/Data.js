import React from 'react';
import PropTypes from 'prop-types'

class Data extends React.Component {
  constructor() {
    super()

    this.handleInfo = this.handleInfo.bind(this);

    this.state = {
      nome: '',
      email: '',
    }
  }

  handleInfo({ target }) {
    const { name, value } = target;
    switch (name) {
      case 'nome':
        console.log(value.toUpperCase());
        break
      case 'email':
        console.log('Aqui é o email');
        break
      default:
        console.log('Nenhum dado encontrado');
    }
    this.setState({
      [name]:value
    })
  }

  render() {
    return (
      <fieldset>
        <label>Nome
          <input name='nome' type='text' value={this.state.nome} onChange={this.handleInfo}></input>
        </label>
        <label>
          <input name='email' type='text' value={this.state.email} onChange={this.handleInfo}></input>
        </label>
      </fieldset>
    )
  }
};

Data.propTypes = {}

export default Data;