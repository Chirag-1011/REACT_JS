import './App.css';
import { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  inc=()=>{
 this.setState({number: this.state = this.state.number +1})
  }

  dec=()=>{
    this.setState({number: this.state = this.state.number -1})
     }


  render(){

       return <div id='a1'>  
         <h1>{this.state.number}</h1>
         <button onClick={this.dec}>-</button>
         <button onClick={this.inc}>+</button>
  
       </div>
  
     }
































  // constructor() {

  //   super()
  //   this.state = {
  //     number: 0
  //   }

  // }
  // dec = () => {
  //   this.setState({ number: this.state.number - 1 })
  // }

  // inc =()=>{
  //   this.setState({ number: this.state.number + 1 })
  // }

  // render(){

  //   return <div>  
  //     <h1>{this.state.number}</h1>
  //     <button onClick={this.dec}>-</button>
  //     <button onClick={this.inc}>+</button>

  //   </div>

  // }
}
export default Counter;