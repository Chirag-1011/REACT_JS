import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderData from './login'


function App() {
  const [count, setCount] = useState(0)
  const [UserErr,setUserErr] = useState(false)
  const [EmailErr,setEmailErr] = useState(false)
  const [PassErr,setPassErr] = useState(false)
  const [obj,setobj] = useState({
    user : "",
    email : "",
    password : ""
  })
  const [arr,setarr] = useState([])

  let HandleForm = (e)=>{
      e.preventDefault();
  }

  let HandleChange = (ee)=>{

    const {name,value} = ee.target
    setobj({...obj,[name]:value})  
  }

    var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/

  let HandleErr = (eee)=>{

    const {name,value} = eee.target
    if(name == "user" && value.length < 3){
      setUserErr(true)
      
    }
    if(name == "email" && !emailregex.test(value) ){
      setEmailErr(true)
    }
    if(name == "password" && value.length > 8 &&  !passregex.test(value)){
    setPassErr(true)
    }
  }

  let HandleErrr = (eee)=>{

    const {name,value} = eee.target
    if(name == "user"){
      setUserErr(false)
      
    }
    
    if(name == "email"){
      setEmailErr(false)
    }
    if(name == "password"){
    setPassErr(false)
    }
  }

  let submitform = ()=>{

    if(UserErr == false && EmailErr == false && PassErr == false){
      setarr([...arr,obj])
      alert("Information Submited ..")
    }
    else{
      alert("Please Fill The Form... ???")
    }
    
  }

  return (
    <>
      <form action="" onSubmit={HandleForm}>
        <h1>LOGIN FORM</h1>
        <input type="text" name='user' onFocus={HandleErrr}  onBlur={HandleErr} placeholder='UserName' onChange={HandleChange}  /> <br />
        { UserErr == true ? <p>Enter valid username</p> : ""   }
        <input type="text" name='email' onFocus={HandleErrr} onBlur={HandleErr} placeholder='Email' onChange={HandleChange} /><br />
        { EmailErr == true ? <p>Enter valid Email</p> : ""   }
        <input type="text" name='password' onFocus={HandleErrr} onBlur={HandleErr} placeholder='PassWord' onChange={HandleChange} /><br />
        { PassErr == true ? <p>Enter valid Password</p> : ""   }
        <input type="submit" onClick={submitform} id='sub' />
      </form><br /><br /><br /><br /><br />

    <RenderData data = {arr}/>

    </>
  )
}

export default App
