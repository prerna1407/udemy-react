import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    userName : [
      {name : 'Prerna'}
    ]
  };

  statechangeHandler = (event) =>{
    this.setState({
      userName : [
        {name : event.target.value}
      ]
    })
    }
  render(){
  return (
    <div className="App">
       <UserInput change={this.statechangeHandler} name ={this.state.userName[0].name}></UserInput>
       <UserOutput name={this.state.userName[0].name}></UserOutput>
    </div>
  );
}}

export default App;
