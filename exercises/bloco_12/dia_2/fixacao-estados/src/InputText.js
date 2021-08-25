import React from 'react';

class InputText extends React.Component {
  render() {
    const {name, value, handleChange} = this.props;

    return(
      <input type='text' placeholder='Insira seu nome' name={name} value={value} onChange={handleChange}></input>
    )
  }
}

export default InputText;