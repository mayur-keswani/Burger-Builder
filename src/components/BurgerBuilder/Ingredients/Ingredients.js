import React from 'react'


import "bootstrap/dist/css/bootstrap.css";
import './ingredients.css'

import PropTypes from 'prop-types';

import { Fragment } from 'react';

const Ingredients=(props)=>{
	let ingredient=null;

    
	switch(props.type){
		case "bread-at-top":
			 ingredient=(
			 		<div className="col-lg-5 offset-3 bread-at-top">
			 			<div className="Seeds1"></div>
					 	<div className="Seeds2"></div>	
		   			</div>
					)
				 break;
		case "bread-at-bottom":
			 ingredient=(
			 			<div className="col-lg-5 offset-3 bread-at-bottom">
			 			<div className="Seeds2"></div>	
					    <div className="Seeds1"></div>
		 				</div>)
				   break;	
		
		case "meat":
			 ingredient=(<div className="col-lg-5 offset-3 meat"></div>  )
			 break;

		case "cheese":
			 ingredient=(<div className="col-lg-5 offset-3 cheese "></div> )
			 break;
		
		case "salad":
			 ingredient=(<div className="col-lg-5 offset-3 salad"></div>  )
			 break;
			 	 
		default :break;	 
	}
    
	
	return(
	    <Fragment>
			{ingredient}
		</Fragment>
	)
}

Ingredients.protoTypes={
	type:PropTypes.string.isRequired
}
export default Ingredients; 