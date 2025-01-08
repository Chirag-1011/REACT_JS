import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Counter1 from './component/Counter1'
import Counter2 from './component/Counter2'
import Counter3 from './component/Counter3'

function App() {

 

  return (
    <>
      <Counter1/>
      <Counter2/>
      <Counter3/>
    </>
  )
}

export default App
