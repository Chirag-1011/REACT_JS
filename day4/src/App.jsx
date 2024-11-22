import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter1 from './counter1';
import Counter2 from './counter2';
function App() {

  let [count,value] = useState(1);

  function max(){

    value(
      count + 1
    )
  }
    function min(){
      value(
        count - 1
      )
  }
 
  return (
    <div className="App">
      <Counter1 a={count}/>
      <button onClick={min}>-</button>
      <button onClick={max}>+</button>
    </div>
  );
}

export default App;
