import { RECIEVE_POKEMON } from 'Actions/pokemon_actions'

export default (state = null, action) => {
  switch (action.type) {
    case RECIEVE_POKEMON:
      return action.items
    default:
      return state
  }
}
