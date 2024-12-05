import React, { useState } from 'react'
import ProductList from './productlist'

function AddProduct() {
    //    const [title,setTitle] = useState("")
    //    const [img,setimg] = useState("")
    //    const [price,setprice] = useState(0)
       const [state,setState] = useState({
         title : "",
         img : "",
         price : 0
       })
       const [arr,setarr] = useState([])
       const handleChange = (e)=>{
           const {name,value} = e.target
          setState({...state,[name] : value})
       }

       const handleSubmit = (e)=>{
         e.preventDefault()
        setarr([...arr,state])
       }

       console.log(arr);
       
       
       
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Title' onChange={handleChange} required/> <br /><br />
            <input type="text" name='img' placeholder='Image URL' onChange={handleChange} /><br /><br />
            <input type="text" name='price' placeholder='Price' onChange={handleChange} /><br /><br />
            <input type="submit" id='subb'  />
        </form>
        <ProductList arr={arr}/>
    </>
  )
}

export default AddProduct