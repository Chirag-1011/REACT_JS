import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Obj, setObj] = useState({
    title : "",
    price : "",
    imgurl : "",
    des : ""
  })
  const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])

  let HandleChange = (e)=>{
    let {name,value} = e.target

    setObj({...Obj,[name]:value})

  }
  // console.log(Obj);

  let HandleSubmit = (e)=>{

    e.preventDefault()

    let {name,value} = e.target

    setArr([...arr,Obj])

    
  }
  console.log(arr);

  useEffect(()=>{

    localStorage.setItem("data",JSON.stringify(arr))

  },[arr])
  
  

  return (
    <>
      <form action="" onSubmit={HandleSubmit}>
        <input type="text" value={Obj.title} name='title' onChange={HandleChange} placeholder='Title' /><br />
        <input type="text" value={Obj.price} name='price' onChange={HandleChange} placeholder='Price' /><br />
        <input type="text" value={Obj.imgurl} name='imgurl' onChange={HandleChange} placeholder='ImageUrl' /><br />
        <input type="text" value={Obj.des} name='des' onChange={HandleChange} placeholder='Description' /><br />
        <input type="submit" id='sub' />
      </form>
    </>
  )
}

export default App
