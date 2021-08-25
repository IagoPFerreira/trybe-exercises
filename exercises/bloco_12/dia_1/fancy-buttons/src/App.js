import React from 'react';
import './App.css';

// function clickHander1() {
//   console.log('Botão 1');
// }

// function clickHander2() {
//   console.log('Botão 2');
// }

// function clickHandler3() {
//   console.log('Botão 3');
// }

class App extends React.Component {
  constructor() {
    super()

    this.clickHandler1 = this.clickHandler1.bind(this);
    this.clickHandler2 = this.clickHandler2.bind(this);
    this.clickHandler3 = this.clickHandler3.bind(this);
    this.state = {
      botao1: 0,
      botao2: 0,
      botao3: 0
    }
  }

  clickHandler1() {
    this.setState((estadoAnterior, _props) => ({
      botao1: estadoAnterior.botao1 + 1,
      botao2: this.state.botao2,
      botao3: this.state.botao3
    }))
  }

  clickHandler2() {
    this.setState((estadoAnterior, _props)  => ({
      botao1: this.state.botao1,
      botao2: estadoAnterior.botao2 + 1,
      botao3: this.state.botao3,
    }))
  }

  clickHandler3() {
    this.setState((estadoAnterior, _props) => ({
      botao1: this.state.botao1,
      botao2: this.state.botao2,
      botao3: estadoAnterior.botao3 + 1,
    }))
  }

  render() {
      // console.log(this);
      return(
      <div>
        <button onClick={this.clickHandler1}>{this.state.botao1}</button>
        <button onClick={this.clickHandler2}>{this.state.botao2}</button>
        <button onClick={this.clickHandler3}>{this.state.botao3}</button>
      </div >
    )

  }
}

export default App;
