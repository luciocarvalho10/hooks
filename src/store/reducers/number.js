export default function numberReducer (state, action) {
  switch (action.type) {
    case "add2":
      return { ...state, number: state.number + 2 }
    case "sub2":
      return { ...state, number: state.number - 2 }
    case "mult7":
      return { ...state, number: state.number * 7 }
    case "div25":
      return { ...state, number: state.number / 25 }
    case "addN":
      return { ...state, number: action.payload.number }
    case "int":
      return { ...state, number: parseInt(state.number) }
    default:
      return state
  }
}