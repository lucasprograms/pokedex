import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'Middleware/thunk'
import rootReducer from 'Reducers/root_reducer'

const configureStore = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default configureStore
