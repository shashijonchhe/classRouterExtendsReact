import React from 'react';
import Route from 'react-router-dom/Route';





const Main=(props)=>{

	return(

	<div className="App">
		<Route path='/add' exact strict render ={
        ()=>{
          return(
          	<div>
              <input type='text' placeholder='Name' onChange={props.onHandleChange}></input>
              <hr/>
              <input type='text' placeholder='Email' onChange={props.onEmailChange}></input>
              <hr/>
              <button onClick={props.onHandleClick}>Submit</button>

              
              

             </div>
            ) 
        }
      }/>

    	<Route path='/list' exact strict render ={
        ()=>{
        	
          return(
          	
            <div></div>
      
          )
        }
      }/>
</div>
		)

}

export default Main;