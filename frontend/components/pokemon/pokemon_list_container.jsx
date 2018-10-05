import React from 'react';
import { connect } from 'react-redux'
import { fetchAllPokemon } from 'Actions/pokemon_actions'
import { allPokemon } from 'Reducers/selectors'
import PokemonList from './pokemon_list'

const mapStateToProps = state => ({
  pokemon: allPokemon(state)
})

const mapDispatchToProps = dispatch => ({
  fetchAllPokemon: () => dispatch(fetchAllPokemon())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList)
