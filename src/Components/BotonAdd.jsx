import React from 'react'
import { useState } from 'react'

export const BotonAdd = React.memo(({incrementar}) => {

  console.log('Me estoy redibujando')

  const [inputValue, setInputValue] = useState()

  const handleInput = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  const onsubmit = (e) => {
    e.preventDefault()
  } 

  return (
    <form onSubmit={onsubmit}>
      <input
        type='text'
        placeholder='Ingresa un Número'
        value={inputValue}
        onChange={handleInput}
      />
      <button onClick={() => incrementar(inputValue)}>Incrementar +</button>
    </form>
  )
})
