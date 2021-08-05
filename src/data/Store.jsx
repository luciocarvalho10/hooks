import React, { useState } from "react"

const initialState = {
  number: 1985,
  text: "LPC API + Hooks",
}

export const AppContext = React.createContext(initialState)

const Store = props => {
  const [state, setState] = useState(initialState)

  const newState = (key, value) => setState({ ...state, [key]: value })

  const provider = {
    number: state.number,
    text: state.text,
    setNumber: n => newState("number", n),
    setText: t => newState("text", t),
  }

  return (
    <AppContext.Provider value={provider}>{props.children}</AppContext.Provider>
  )
}

export default Store
