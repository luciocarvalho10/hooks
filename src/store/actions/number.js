export function addN (dispatch, number) {
  dispatch({ type: "addN", payload: { number } })
}

export function add2 (dispatch, number) {
  dispatch({ type: "add2", number: number + 2 })
}

export function sub2 (dispatch, number) {
  dispatch({ type: "sub2", number: number - 2 })
}

export function mult7 (dispatch, number) {
  dispatch({ type: "mult7", number: number * 7 })
}

export function div25 (dispatch, number) {
  dispatch({ type: "div25", number: number / 25 })
}

export function int (dispatch, number) {
  dispatch({ type: "int", number: parseInt(number) })
}
