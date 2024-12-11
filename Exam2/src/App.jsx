import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let [obj,setobj] = useState({
    ProductName: "",
    roductPrice: 0,
    Category: "",
    Description: ""
  }) 

  var [NameErr, setNameErr] = useState(false)
  var [PriceErr,setPriceErr]=useState(false)
  var [DescriptionErr, setDescriptionErr] = useState(false)


  let HandleChange = (e)=>{
    
    let {name , value} = e.target

    setobj({...obj,[name]:value})

  }


  function FocusHandle(e) {
    var { name, value } = e.target

    if (name == "ProductName") {
        setNameErr(false)
    }

    if (name == "roductPrice") {
      setPriceErr(false)
    }
    if (name == "Description") {
      setDescriptionErr(false)
    }

}


  function HandleBlur(e) {

    let { name, value } = e.target
    if (name == "ProductName" && value.length <= 3) {
      setNameErr(true)
    }
    
    if (name == "roductPrice" && value < 0) {
      setPriceErr(true)
    }

    if (name == "Description" && value.length >= 200 ) {
      setDescriptionErr(true)
    }
}

function SubHandle(d) {

  d.preventDefault()

  var { name, value } = d.target

  if(NameErr == false && PriceErr == false && DescriptionErr == false){
    setobj({ ...obj, [name]: value })
    alert("Submit done .")
  }
  else{
    alert("Fill The Data ?!!")
  }
  

  console.log(obj);
  
  
}





  return (
    <>
      <form action="" onSubmit={SubHandle}>
          <h1>PRODUCT FORM</h1>
          <input required type="text" name = "ProductName" placeholder="Product Name:" onChange = {HandleChange} onFocus={FocusHandle} onBlur={HandleBlur} /><br /><br />
          {NameErr == true ?<p>Product name is required and must be at least 3
            characters.</p> : ""}


          <input required type="text" name = "roductPrice" placeholder="Product Price:" onChange = {HandleChange} onFocus={FocusHandle} onBlur={HandleBlur} /><br /><br />
          {PriceErr == true ?<p>Price must be a positive number.</p> : ""}

          <select required name="Category" id="" onChange = {HandleChange}>
            <option value="Electronics" >Electronics</option>
            <option value="Clothing" >Clothing</option>
            <option value="Groceries" >Groceries</option>
            <option value="Books" >Books</option>
          </select><br /><br />
          <input required type="text" name = "Description" placeholder="Description:" onChange = {HandleChange} onFocus={FocusHandle} onBlur={HandleBlur} /><br /><br />
          {DescriptionErr == true ?<p>Description must be a Less Then  200 Words.</p> : ""}

          <input type="Submit" id='butt' />
      </form>
    </>
  )
}

export default App
