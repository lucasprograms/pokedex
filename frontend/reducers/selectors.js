export const allPokemon = (state) =>
  Object.keys(state.entities.pokemon).map(
    key => state.entities.pokemon[key]
  )