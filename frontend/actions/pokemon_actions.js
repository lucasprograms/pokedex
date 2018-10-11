import * as APIUtil from 'Util/api_util'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON'
export const RECIEVE_POKEMON = 'RECIEVE_POKEMON'

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const fetchAllPokemon = () => dispatch =>
  APIUtil.fetchAllPokemon()
    .then(
      pokemon => { dispatch(receiveAllPokemon(pokemon)) }
    )

export const receivePokemon = ({ pokemon, items }) => ({
  type: RECIEVE_POKEMON,
  pokemon,
  items
})

export const fetchSpecificPokemon = id => dispatch =>
  APIUtil.fetchSpecificPokemon(id)
    .then(
      data => dispatch(receivePokemon(data))
    )
