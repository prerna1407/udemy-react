import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Assignment01/UserInput/UserInput';
import UserOutput from './Assignment01/UserOutput/UserOutput';
import InputVarLength from './Assignment02/Validation/ValidationComponent';
import CharComponent from './Assignment02/Char/CharComponent';

class App extends Component {
  state = {
    userName : [
      {name : 'Prerna'}
    ],
    inputLength : null,
    inputVal : ''
  };

  statechangeHandler = (event) =>{
    this.setState({
      userName : [
        {name : event.target.value}
      ]
    })
    }
    inputChangeHandlder = (event) =>{
      this.setState({
        inputLength : event.target.value.length,
        inputVal: event.target.value
      })
    }
    deleteCharHandler = (charIndex) =>{
      const text = this.state.inputVal.split('');
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    this.setState({inputVal: updatedText});
    }
  render(){
    const charList = this.state.inputVal.split('').map((ch, index) => {
      return <CharComponent 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });
  return (
    <div className="App">
       {/* <UserInput change={this.statechangeHandler} name ={this.state.userName[0].name}></UserInput>
       <UserOutput name={this.state.userName[0].name}></UserOutput> */}
       <input type="text" onChange={this.inputChangeHandlder} />
      <InputVarLength inputlength={this.state.inputLength} />
        {charList}
    </div>
  );
}}

export default App;
 