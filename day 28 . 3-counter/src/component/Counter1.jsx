import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Counter1() {

    let select = useSelector((state) => state)
    let Dispatch = useDispatch()

    console.log(select.Count1);
    
  
    let HandleInc = ()=>{
      Dispatch({type:"INC"})
    }
    let HandleDec = ()=>{
      Dispatch({type:"DEC"})
    }

  return (
    <div>
        <h1>couter1 -- {select.Count1}</h1>
        <button onClick={HandleDec}>-</button> &nbsp;&nbsp;&nbsp;
        <button onClick={HandleInc}>+</button>
    </div>
  )
}

export default Counter1