import React, { Component } from 'react'
import PokemonListItem from './pokemon-list-item'

export default class PokemonList extends Component {
  componentDidMount () {
    this.props.fetchAllPokemon()
  }

  render() {
    return (
      <div className="row">
        {this.props.pokemon.map((poke, idx) =>
          <PokemonListItem key={idx} pokemon={poke} />
        )}
      </div>
    )
  }
}
