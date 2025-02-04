import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentForm from './Component/StudentForm'
import Navbar from './Component/Navbar'
import StudentList from './Component/Studentlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StudentForm/>
     <Navbar/>
     <StudentList/>
    </>
  )
}

export default App
