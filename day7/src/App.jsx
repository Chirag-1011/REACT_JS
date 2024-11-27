import { useState } from 'react';
import './App.css';



function App() {
  var [h,seth] = useState("hide")
  let [Mobile,SetMobile] = useState("")
  let [Email,SetEmail] = useState("")
  let [Password,SetPassword] = useState("")
  let [LogMail,SetLogMail] = useState("")
  let [LogPass,SetLogPass] = useState("")

  let [arr,Setarr] = useState([])

  let Mobilen = (e)=>{
    SetMobile (e.target.value)
  }

  let Emailn = (e)=>{
    SetEmail (e.target.value)
  }

  let Passn = (e)=>{
    SetPassword (e.target.value)
  }

  let obj = {
    Mobile,
    Email,
    Password
  }

  
  let Sub = ()=>{
    

    Setarr([...arr,obj])

    console.log(arr);
    
    alert ("signup done")
    seth("show")

  }


  let Loge = (e)=>{
    SetLogMail (e.target.value)
  }

  let Passe = (e)=>{
    SetLogPass (e.target.value)
  }

  let Logsub = ()=>{

        let a = arr.filter((el)=>{
            if(el.Email ==LogMail && el.Password == LogPass){
                return el ;
              }
        })    
        if (a.length > 0) {
          alert ("Login done")
        }
        else{
          alert ("Login Fail")
        }
        console.log(a);
           
  }

  
 
  return (
    <div>
      { h == "show" ?<div className="App">
       <div className='main'>
        <div className='img'>
          <div className='logA'>
      <h1 className='h1'>Login</h1>
      <p className='p'>Get access to your Orders,<br /> Wishlist and Recommendations</p>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" className='v' alt="" />
     </div>
        </div>
        <div className='w-[510px] pt-[56px] ps-[35px] pe-[35px]'>
          <input className='in' placeholder='Enter Email' type="text" onChange = {Loge} />
          <input className='in' placeholder='Password' type="text" onChange = {Passe} />
          <p className='text-[12px] text-[#878787] font-[500] mb-[20px]'>By continuing, you agree to Flipkart's <a href="" className='text-[#2878F1]'> Terms of Use </a> and <a href="" className='text-[#2878F1]'> Privacy Policy.</a></p>
          <button className='bb mb-[270px]' onClick = {Logsub}>Request OTP</button>
          <div className='text-center'>
            <span className='text-[#2878F1] font-[500] text-[14px] cursor-pointer' onClick={() => seth("hide")}>New to Flipkart? Create an account</span>
          </div>
        </div>
      </div> 
    </div>
    
    : <div className="Appp">
    <div className='main'>
     <div className='img'>
     <div className='signA'>
    <h1 className='h1'>Looks like you're new here!</h1>
      <p className='p'>Sign up with your mobile number to get started</p>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" className='v1' alt="" />
    </div>
     </div>
     <div className='w-[510px] pt-[56px] ps-[35px] pe-[35px]'>
       <input className='in' placeholder='Enter Mobile number' type="text" onChange = {Mobilen} />
       <input className='in' placeholder='Enter Your Email' type="text" onChange = {Emailn} />
       <input className='in' placeholder='Enter Your Password' type="text"  onChange = {Passn}/>
       <p className='text-[12px] text-[#878787] font-[500] mb-[20px]'>By continuing, you agree to Flipkart's <a href="" className='text-[#2878F1]'> Terms of Use </a> and <a href="" className='text-[#2878F1]'> Privacy Policy.</a></p>
       <button className='bb mb-[20px]' onClick ={Sub}>Continue</button>
       <button className='bb2 mb-[20px]' onClick={() => seth("show")} >Existing User? Log in</button>
     </div>
   </div> 
 </div> }
    </div>    
  );
}

export default App;


