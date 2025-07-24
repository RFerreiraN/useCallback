import { useCallback, useState } from 'react'
import { BotonAdd } from './BotonAdd'


export const ComponentUseCallBack = () => {

  const [contador, setContador] = useState(0)

  const incrementarPadre = useCallback((val)=> {
    setContador(nuevoContador => nuevoContador + val) 
  }, []) 

  return (
    <>
      <h1>Hook useCallBack</h1>
      <hr />
      <h2>Contador: {contador}</h2>
      <BotonAdd incrementar={incrementarPadre} />
    </>
  )
}
