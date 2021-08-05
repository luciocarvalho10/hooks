import React from "react"

const UseCallbackButtons = props => {
console.log('Renderizando...')
  return (
    <div className="UseCallbackButtons">
      <div>
        <button className="btn" onClick={() => props.inc(1)}>
          1
        </button>
        <button className="btn" onClick={() => props.inc(2)}>
          2
        </button>
        <button className="btn" onClick={() => props.inc(3)}>
          3
        </button>
      </div>
    </div>
  )
}

export default React.memo(UseCallbackButtons)
