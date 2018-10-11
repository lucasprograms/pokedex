export const allPokemon = (state) =>
  Object.keys(state.entities.pokemon.allPokemon).map(
    key => state.entities.pokemon.allPokemon[key]
  )
