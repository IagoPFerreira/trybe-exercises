import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='Pokedex-title'>Pokedex</h1>
        <section className='PokemonCard'>
          {pokemons.map((pokemon) => <Pokemon nome={pokemon.name} tipo={pokemon.type} pesoMedio={pokemon.averageWeight} imagem={pokemon.image} />)
          }
        </section>
      </div>
    )
  }
}

export default Pokedex;