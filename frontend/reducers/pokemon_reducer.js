import { RECIEVE_POKEMON, RECEIVE_ALL_POKEMON } from 'Actions/pokemon_actions'

const initialState = {
  allPokemon: {},
  currentPokemon: {}
}

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return { ...state, allPokemon: action.pokemon }
    case RECIEVE_POKEMON:
      return { ...state, currentPokemon: action.pokemon }
    default:
      return state
  }
}

export default pokemonReducer
