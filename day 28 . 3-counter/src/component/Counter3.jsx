import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Counter3() {

  let [Countval,setCountval] = useState("")

    let select = useSelector((state) => state)
    let Dispatch = useDispatch()
  
    let HandleInc = ()=>{
      Dispatch({type:"NUM",payload:Countval})
    }

    let HandleChange = (e)=>{
        setCountval(e.target.value)
    }
  return (
    <div>
        <div><br /><br /><br />
            <input type="number" onChange={HandleChange} />
            <h1>-- {select.Count3}</h1>
            <button onClick={HandleInc}>Click</button>
        </div>
    </div>
  )
}

export default Counter3