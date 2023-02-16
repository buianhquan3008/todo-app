const initState = {
  items: [],
}

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
})

const reducer = (state = initState, action) => {
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      items: [...state.items, action.payload]
    }
  }
  return state;
}

export default reducer;
