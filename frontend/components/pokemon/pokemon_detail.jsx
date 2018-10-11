import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ItemList from '../items/item_list'

export default class PokemonDetail extends Component {
  componentDidMount() {
    this.props.fetchSpecificPokemon(this.props.match.params.pokemonId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.fetchSpecificPokemon(this.props.match.params.pokemonId)
    }
  }

  render() {
    const { pokemon, items } = this.props

    return (
      <div className="col-12">
        <div className="jumbotron d-flex justify-content-center row">
          <h1 className="display-4 col-10">
            <span className="pokemon-detail__name text-lowercase">{pokemon.name}</span>
          </h1>
          <Link className="col-2" to={'/'}>Home</Link>
          <img className='d-flex card-img-top col-12 mb-5' src={pokemon.image_url} alt={`${pokemon.name}-img`} />
          <ul className="list-group col-12 col-lg-4">
            <li className="list-group-item">Attack: {pokemon.attack}</li>
            <li className="list-group-item">Defense: {pokemon.defense}</li>
            <li className="list-group-item text-capitalize">Type: {pokemon.poke_type}</li>
            <li className="list-group-item">
              <a className="dropdown-toggle" data-toggle="collapse" href="#movesList" aria-controls="movesList">Moves:</a>
            </li>
            <div className="collapse" id="movesList">
              {pokemon.moves ? pokemon.moves.map((move, idx) =>
                <li key={idx} className="list-group-item list-group-item-secondary">
                  <span className="ml-3 font-italic text-capitalize">
                    {'\u2192'} {move}
                  </span>
                </li>
              ) : ''}
            </div>
            <ItemList items={items} itemIds={pokemon.item_ids}/>
          </ul>
        </div>
      </div>
    )
  }
}
