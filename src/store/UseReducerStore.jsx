import React, { useReducer } from "react"
import { initializer, allReducer } from "./index"

import action from "./actions"

const UseReducerStore = props => {
  const [state, dispatch] = useReducer(allReducer, initializer)
  return (
    <div className="UseReducer">
      <div className="center">
        <span className="text">
          {state.user ? state.user.name : "Sem Usuário"}
        </span>
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => action.add2(dispatch, state.number)}>
            +2
          </button>
          <button className="btn" onClick={() => action.sub2(dispatch, state.number)}>
            -2
          </button>
          <button className="btn" onClick={() => action.mult7(dispatch, state.number)}>
            *7
          </button>
          <button className="btn" onClick={() => action.div25(dispatch, state.number)}>
            /25
          </button>
          <button className="btn" onClick={() => action.int(dispatch, state.number)}>
            int
          </button>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => action.login(dispatch, "Lucio")}
          >
            Login
          </button>
          <button className="btn" onClick={() => action.logout(dispatch)}>
            Logout
          </button>
        </div>
        <div>
          <input
            type="number"
            className="input"
            value={state.number}
            onChange={e => action.addN(dispatch, e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default UseReducerStore
