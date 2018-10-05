import { RECEIVE_ALL_POKEMON } from 'Actions/pokemon_actions'

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon
    default:
      return state
  }
}

export default pokemonReducer;