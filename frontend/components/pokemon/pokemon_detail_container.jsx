import { connect } from 'react-redux'
import { fetchSpecificPokemon } from 'Actions/pokemon_actions'
import PokemonDetail from './pokemon_detail'

const mapStateToProps = state => ({
  pokemon: state.entities.pokemon.currentPokemon,
  items: state.entities.items
})

const mapDispatchToProps = dispatch => ({
  fetchSpecificPokemon: id => dispatch(fetchSpecificPokemon(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail)
