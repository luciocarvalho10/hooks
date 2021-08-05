export function login(dispatch, name) {
  dispatch({ type: "login", payload: { name } })
}

export function logout(dispatch) {
  dispatch({ type: "logout", user: null })
}