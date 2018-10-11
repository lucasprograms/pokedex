import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import PokemonListContainer from './pokemon/pokemon_list_container'
import PokemonDetailContainer from './pokemon/pokemon_detail_container'

const Root = ({ store }) =>
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/" exact component={PokemonListContainer} />
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>
    </HashRouter>
  </Provider>

export default Root
