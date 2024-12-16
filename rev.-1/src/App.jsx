import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [NameErr,SetNameErr] = useState(false)
  const [PriceErr,SetPriceErr] = useState(false)
  const [DescriptionErr,SetDescriptionErr] = useState(false)
  const [obj,setobj] = useState({
    ProductName : "" ,
    ProductPrice : 0,
    ProductDescription : ""
  })
  

  let HandleChange = (e)=>{   

    let {name,value} = e.target

    setobj({...obj,[name]:value})
    console.log(obj);
  }

  let HandleBlur = (e)=>{
    let {name,value} = e.target

    if(name == "ProductName" && value.length < 3){
      SetNameErr(true)
    }

    if(name == "ProductPrice" && value <= 0){
      SetPriceErr(true)
    }

    if(name == "ProductDescription" && value.length > 200){
      SetDescriptionErr(true)
    }


  }

  return (
    <>
      <form action="">
        <h2>PRODUCT FORM</h2>
        <input type="text" name='ProductName' onChange={HandleChange} onBlur={HandleBlur} /> <br /><br />
        {NameErr == true ? <p>Enter Name</p> : "" }
        
        <input type="text" name='ProductPrice' onChange={HandleChange} /><br /><br />
        {PriceErr == true ? <p>Enter Price</p> : "" }
        
        <input type="text" name='ProductDescription' onChange={HandleChange} /><br /><br />
        {DescriptionErr == true ? <p>Enter valid descrioption</p> : "" }
        
        <input type="submit" id='subb' />
      </form>
    </>
  )
}

export default App
