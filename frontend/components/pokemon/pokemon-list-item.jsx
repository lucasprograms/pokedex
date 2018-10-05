import React from 'react'

const PokemonListItem = ({ pokemon }) =>
  <div className="pokemon-list-item col-2 mb-2">
    <div  className="pokemon-list-item__content card offset-1 col-10" style={{ height: '100%' }}>
      <img className="card-img-top" src={pokemon.image_url} alt={`${pokemon.name}-img`} />
      <div className="card-body justify-content-center align-items-end d-flex">
        <h5 className="card-title d-flex">{pokemon.name}</h5>
      </div>
    </div>
  </div>

export default PokemonListItem 