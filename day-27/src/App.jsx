import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  let select = useSelector((state) => state)
  let Dispatch = useDispatch()

  let HandleInc = ()=>{
    Dispatch({type:"INC"})
  }
  let HandleDec = ()=>{
    Dispatch({type:"DEC"})
  }

  return (
    <>
      <h1>couter -- {select}</h1>
      <h1>couter -- {select}</h1>
      <button onClick={HandleDec}>-</button> &nbsp;&nbsp;&nbsp;
      <button onClick={HandleInc}>+</button>
    </>
  )
}

export default App
