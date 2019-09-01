import React from 'react';
import './App.css';
import {BrowserRouter as Shashi, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './components/header';
import Main from './components/main';

class Router extends React.Component{
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      list:[]
    }
  }

onHandleNameChange=(e)=>{
  let name=this.state.name
  //let list=this.state.list
  name=e.target.value
  console.log(name)
  //list.push(name)
  this.setState({
    name
  })
}

onHandleEmailChange=(e)=>{
  let email=this.state.email
  //let list=this.state.list
  email=e.target.value
  console.log(email)
  //list.push(email)
  this.setState({
    email
  })
}

onHandleNameClick=(e)=>{
  let name=this.state.name
  let email=this.state.email
  let list=this.state.list

  list.push(name)
  list.push(email)
  this.setState({
    name,
    email
  })

}


  render(){
    let list=this.state.list
  return(

    
  <Shashi>

    <Header />

 
    <Main onHandleChange={this.onHandleNameChange} 
          onEmailChange={this.onHandleEmailChange}
          onHandleClick={this.onHandleNameClick}
    
          />

      <div>
      <ul>
             {list.map(function(el){return <li>{el}</li>})}     
            </ul> 
            </div>

   </Shashi>


  
  

    )
}
}

export default Router;
