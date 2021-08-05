import React, { useEffect, useRef, useState } from "react"
import PageTitle from "../../components/layout/PageTitle"
import SectionTitle from "../../components/layout/SectionTitle"

const UseRef = props => {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const count = useRef(0)
  const myRef1 = useRef(null)
  const myRef2 = useRef(null)

  useEffect(() => {
    count.current++
    myRef2.current.focus()
  }, [value1])

  useEffect(() => {
    count.current++
    myRef1.current.focus()
  }, [value2])

  let merge = (s1, s2) => [...s1].map((s, i) => (s || '') + (s2[i] || ''))

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          ref={myRef1}
          type="text"
          className="input"
          value={value1}
          onChange={e => setValue1(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
        <div className="center">
            <input
              ref={myRef2}
              type="text"
              className="input"
              value2={value2}
              onChange={e => setValue2(e.target.value)}
            />
        </div>
    </div>
  )
}

export default UseRef
