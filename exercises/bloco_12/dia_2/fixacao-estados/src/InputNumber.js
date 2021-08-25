import React from 'react';

class InputNumber extends React.Component {
  render() {
    const {name, value, handleChange} = this.props;

    return(
      <input type='number' placeholder='Insira um número' name={name} value={value} onChange={handleChange}></input>
    )
  }
}

export default InputNumber;