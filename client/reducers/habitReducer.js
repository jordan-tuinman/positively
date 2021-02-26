const habitReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_HABITS':
      return action.habits

    default:
      return state
  }
}

export default habitReducer
