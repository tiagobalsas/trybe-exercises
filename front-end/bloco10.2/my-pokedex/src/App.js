import { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex dataPokemon={pokemons} />
      </div>
    );
  }
}

export default App;
