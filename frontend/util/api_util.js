export const fetchAllPokemon = () =>
  $.get('/api/pokemon')

export const fetchSpecificPokemon = (id) =>
  $.get(`/api/pokemon/${id}`)
