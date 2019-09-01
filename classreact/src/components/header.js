import React from 'react';
import {Link} from 'react-router-dom';




const Header=(props)=>{
	return(

		<div className="App">
      
        <Link to='/add'>Add</Link>
        <br/>
        <Link to='/list'>List</Link>
      
    </div>  

		)
}


export default Header;













