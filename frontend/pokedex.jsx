import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/Root'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root')
  const store = configureStore()
  ReactDOM.render(<Root store={store} />, rootEl)
})
