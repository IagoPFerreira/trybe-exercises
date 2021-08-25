import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'


class Pokemon extends React.Component {
  render() {
    const { nome, tipo, pesoMedio, imagem } = this.props
    // console.log(this.props.nome);
    return (
      <div className='currentPokemon'>
        <div className='information'>
          <p>{nome}</p>
          <p>{tipo}</p>
          <p>{`Average weight: ${pesoMedio.value} ${pesoMedio.measurementUnit}`}</p>
        </div>
        <img src={imagem} alt={`Imagem do pokemon ${nome}`} />
      </div>
    );
  }
}

Pokemon.proptype = {
  nome: PropTypes.string.isRequired,
  tipo: PropTypes.string,
  pesoMedio: PropTypes.object,
  imagem: PropTypes.string,
}

export default Pokemon;