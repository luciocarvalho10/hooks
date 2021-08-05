import React, { useReducer } from "react"
import PageTitle from "../../components/layout/PageTitle"
import SectionTitle from "../../components/layout/SectionTitle"
import UseReducerStore from "../../store/UseReducerStore"

const initializer = {
  user: null,
  cart: [],
  products: [],
  number: 0, //foco...
}

const reducer = (state, action) => {
  switch (action.type) {
    case "+2":
      return { ...state, number: state.number + 2 }
    case "-2":
      return { ...state, number: state.number - 2 }
    case "*7":
      return { ...state, number: state.number * 7 }
    case "/25":
      return { ...state, number: state.number / 25 }
    case "addN":
      return { ...state, number: action.payload.number }
    case "int":
      return { ...state, number: parseInt(state.number) }
    case "login":
      return { ...state, user: { name: action.payload.name } }
    case "logout":
      return { ...state, user: null }
    default:
      return state
  }
}

const UseReducer = props => {
  const [state, dispatch] = useReducer(reducer, initializer)
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">
          {state.user ? state.user.name : "Sem Usuário"}
        </span>
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => dispatch({ type: "+2" })}>
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "-2" })}>
            -2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "*7" })}>
            *7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "/25" })}>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: "int" })}>
            int
          </button>
        </div>
        <div>
          <button
            className="btn"
            onClick={() =>
              dispatch({ type: "login", payload: { name: "Lucio" } })
            }
          >
            Login
          </button>
          <button className="btn" onClick={() => dispatch({ type: "logout", user: null })}>
            Logout
          </button>
        </div>
        <div>
          <input
            type="number"
            className="input"
            value={state.number}
            onChange={e =>
              dispatch({ type: "addN", payload: { number: e.target.value } })
            }
          />
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      <UseReducerStore />
    </div>
  )
}

export default UseReducer
