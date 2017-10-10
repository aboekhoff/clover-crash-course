const initialState = [
  { tag: 'cats', content: 'Pet Mr. Sprinkles' },
  { tag: 'react', content: 'Study React' },
  { tag: 'clover', content: 'Setup Optimizely experiment' },
  { tag: 'fire monkey hamburger', content: 'Eat lunch' },
  { tag: 'cats', content: 'Feed Mr. Sprinkles' }
]

export function reducer(state = initialState, action) {
  let newState

  switch (action.type) {
    case 'DELETE_TODO':
      newState = state.slice()
      newState.splice(action.index, 1)
      return newState

    case 'ADD_TODO':
      return state.concat([action.data])

    case 'EDIT_TODO':
      newState = state.slice()
      newState[action.index] = action.data
      return newState

    default:
      return state
  }
}

export const actionCreators = {
  deleteTodo(index) { return { type: 'DELETE_TODO', index } },
  addTodo(data) { return { type: 'ADD_TODO', data } },
  editTodo(data, index) { return { type: 'EDIT_TODO', index, data } }
}
