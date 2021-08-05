export default function userReducer (state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: { name: action.payload.name } }
    case "logout":
      return { ...state, user: null }
    default:
      return state
  }
}