import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Productlist from './component/Productlist'
// import Product from './component/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Productlist/>
      {/* <Product/> */}
    </>
  )
}

export default App
