import React, { useEffect, useState, useRef } from 'react'

export const BotonAdd = React.memo(({incrementar}) => {

  console.log('Me estoy redibujando')

  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const onsubmit = (e) => {
    e.preventDefault()
    
  } 

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <form onSubmit={onsubmit}>
      <input
        ref={inputRef}
        type='text'
        placeholder='Ingresa un Número'
        value={inputValue}
        onChange={handleInput}
      />
      <button onClick={() => incrementar(Number(inputValue))}>Incrementar +</button>
    </form>
  )
})
