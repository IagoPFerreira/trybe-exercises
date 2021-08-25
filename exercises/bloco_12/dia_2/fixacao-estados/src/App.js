import React from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoDoText: '',
      spanText: '',
      estadoDoNumber: '',
      estadoDoTextArea: '',
      estadoDoSelect: '',
      estadoDoCheckbox: false,
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    if(name === 'estadoDoText' && value.length > 15) {
      this.setState({
        spanText: 'Limite máximo de 15 caracteres'
      })
    }

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>Testando formulário</h1>
        <form>
          <InputText name='estadoDoText' value={this.state.estadoDoText} handleChange={this.handleChange} />
          <span name='spanText' value={this.state.spanText}></span>
          <InputNumber name='estadoDoNumber' value={this.state.estadoDoNumber} handleChange={this.handleChange} />
          <textarea name='estadoDoTextArea' value={this.state.estadoDoTextArea} onChange={this.handleChange}></textarea>
          <select name='estadoDoSelect' value={this.state.estadoDoSelect} onChange={this.handleChange}>
            <option>Estado</option>
            <option>Valor</option>
            <option>Nome</option>
            <option>Checkbox</option>
          </select>
          <input type='checkbox' name='estadoDoCheckbox' value={this.state.estadoDoCheckbox} onChange={this.handleChange}></input>
        </form>
      </div >
    )
  }
}

export default App;
