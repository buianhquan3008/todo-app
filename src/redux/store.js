import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import todoReducer from './todo';

const middleware = (store) => (next) => (action) => {
  console.log('dispatching1', action)
  console.log(next)
  let result = next(action)
  console.log('next state1', store.getState())
  // return result
}

const middleware2 = (store) => (next) => (action) => {
  console.log('dispatching2', action)
  console.log(next)
  let result = next(action)
  console.log('next state2', store.getState())
  // return result
}

const middleware3 = (store) => (next) => (action) => {
  console.log('dispatching3', action)
  let result = next(action)
  // next(action)
  console.log(next)
  console.log('next state3', store.getState())
  // return result
}

const reducer = combineReducers({
  todo: todoReducer,
})

export default createStore(reducer, applyMiddleware(middleware, middleware2, middleware3));