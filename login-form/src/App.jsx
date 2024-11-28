import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {


  let [state,SetState] = useState("show")
  let [User,SetUser] = useState("")
  let [Email,SetEmail] = useState("")
  let [Password,SetPassword] = useState("")
  let [LogEmail,SetLogEmail] = useState("")
  let [LogPass,SetLogPass] = useState("")
  let [arr,Setarr] = useState([])

  let change = ()=>{
    SetState("hide")
  }
  let change1 = ()=>{
    SetState("show")
  }
  let Userchange = (e)=>{
    SetUser(e.target.value)
  }
  let Emailchange = (e)=>{
    SetEmail(e.target.value)
  }
  let Passwordchange = (e)=>{
    SetPassword(e.target.value)
  }
  let LogEmailchange = (e)=>{
    SetLogEmail(e.target.value)
  }
  let LogPasschange = (e)=>{
    SetLogPass(e.target.value)
  }

  let obj = {
    User,
    Email,
    Password
  }
  
  let SignSub = ()=>{
    Setarr([...arr,obj])

    alert("Sign Up Successfull")

    SetState("hide")
  }

  console.log(arr);

  let LoginSub = ()=>{
    let a = arr.filter((el)=>{
      if(el.Email == LogEmail && el.Password == LogPass){
        return el;
      }
    })
    console.log(a);
    
    if(a.length > 0){
      alert("Login Successfull")
    }
    else{
      alert("Login Failed")
    }
    // console.log(a);
  }
  
  
  
  return (
    <div>
        { state == "show" ? <div className = "Loginform">

          <p className = "logtext">SIGN UP</p>
          <input type="text" placeholder = "Username" value = {User} onChange = {Userchange} /><br /><br />
          <input type="text" placeholder = "Enter Email" value = {Email} onChange = {Emailchange} /><br /><br />
          <input type="text" placeholder = "Enter Password" value = {Password} onChange = {Passwordchange}/><br /><br />
          <button className ="signsub" onClick = {SignSub}>SUBMIT</button>
          <p className = "signchange" onClick = {change}>ALREADY HAVE AN ACCOUNT</p>
        </div> :
        
        <div className = "Loginform"> 
           <p className = "logtext">LOGIN</p>
          <input type="text" placeholder = "Enter Email" value = {LogEmail} onChange = {LogEmailchange}/><br /><br />
          <input type="text" placeholder = "Enter Password" value = {LogPass} onChange = {LogPasschange} /><br /><br />
          <button className ="signsub" onClick = {LoginSub}>SUBMIT</button>
          <p className = "signchange"  onClick = {change1}>DON'T HAVE AN ACCOUNT</p>
        </div>}
    </div>
  );
}

export default App;
