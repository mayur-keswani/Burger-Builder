import React ,{Fragment} from 'react'
import Controller from './Controller'


import './Controller.css';

const Controllers=(props)=>{
	 	
		return(
			<Fragment>
			       <div className="text-center footer fixed-bottom">
				   		<div className="text-center h2"><strong>Current price </strong> &nbsp; <span className="h1 text-danger">{props.totalPrice}</span></div>

				  		<Controller/>

						 <button className="btn btn-success btn-lg" disabled={!props.orderable} onClick={props.allowPurchaseHandler}>Order Now!</button> 

				   </div>
			  
				
			</Fragment>
		)
};

export default Controllers;