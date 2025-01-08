import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Counter2() {

    
    let select = useSelector((state) => state)
    let Dispatch = useDispatch()
  
    let HandleInc = ()=>{
      Dispatch({type:"MULMAX"})
    }
    


  return (
    <div>
        <div>
            <h1>couter2 -- {select.Count2}</h1>
            <button onClick={HandleInc}>* 2</button>
        </div>
    </div>
  )
}

export default Counter2