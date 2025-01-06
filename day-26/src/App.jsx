import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
 
  const [product,setProduct] = useState([])
    const [filterData,setFilterData] = useState([])
    const [sortval,setSort] = useState("")
    const [filterval,setfilter] = useState("")
    const [search,setSearch] = useState("")

     
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((res)=>{
           setProduct(res);
           setFilterData(res)
        })
        .catch((Err)=>console.log(Err)) 
    },[])
    
    useEffect(()=>{
      let arr = [...product]
      if(sortval == "ltoh"){
         arr = arr.sort((a,b) => a.price - b.price)
      }else if (sortval == "htol"){
         arr = arr.sort((a,b)=> b.price - a.price)
      }else{
         arr = product
      }
      
      if(filterval != ""){
        arr = arr.filter((el)=>{
            return el.category == filterval
         })
      }
       
       if(search != ""){
           arr = arr.filter((el)=>{
            return el.title.toLowerCase().includes(search.toLowerCase())
           })
       }
       

      setFilterData(arr)
      
    },[sortval,filterval,search])


  return (
    <>
    <div id='category'>

    <select onChange={(e)=>setSort(e.target.value)}>
      <option value="">Price</option>
      <option value="ltoh">Low To High</option>
      <option value="htol">High To Low</option>
    </select>

    <input type="text" placeholder='Search Item' onChange={(e)=>setSearch(e.target.value)} />

    <select onChange={(e)=>setfilter(e.target.value)}>
      <option value="">Select category</option>
      <option value="men's clothing">men's clothing</option>
      <option value="women's clothing">women's clothing</option>
      <option value="jewelery">jewelery</option>
      <option value="electronics">electronics</option>
    </select>

    </div>
    <div id='mainn'> 
    {
      filterData.map((el) => {
        return<div id='main'><br />
            <img src={el.image} alt="" />
            <h3>{el.title}</h3>
            <h3>{el.category}</h3>
            <h1>Price : {el.price}</h1>
          </div>
      })

    }
    </div>
    </>
  )
}

export default App
