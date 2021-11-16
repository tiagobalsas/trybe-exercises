import { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { dataPokemon } = this.props;

    return (
      <div>
        {dataPokemon.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={dataPokemon.id}/>
        ))}
      </div>

    );
  }
}

export default Pokedex;
