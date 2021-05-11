const UPDATE_USERNAME = 'UPDATE_USERNAME'

const initialState = {
  name: 'ovasylenko'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return {
        ...state,
        name: action.name
      }
    }
    default:
      return state
  }
}

export function updateUsername(name) {
  return {
    type: UPDATE_USERNAME,
    name
  }
}
