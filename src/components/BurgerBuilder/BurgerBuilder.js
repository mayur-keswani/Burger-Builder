import React, { Fragment } from 'react';

import Ingredient from './Ingredients/Ingredients'


const BurgerBuilder=(props)=>{
	

	let transformedIngredient=Object.keys(props.ingredients).map(ingr=>{
		  return [...Array( props.ingredients[ingr] )].map((_,index)=>{ 
		  			return <Ingredient type={ingr} key={ingr+index}/>	}) }).reduce((accumulator,currentValue)=>{
							  return accumulator.concat(currentValue)},[]);
							  
	// let transformedIngredient=Object.keys(props.ingredients).map((ingr,index)=>{
							
	// 							 for(let i=0;i<props.ingredients[ingr];i++){
	// 								 	console.log(`${ingr}:${i}`)
	// 									return ( <Ingredient type={ingr} key={ingr+i}/>)
	// 							 }
	// 							})
	
		// console.log(transformedIngredient);	

		 if(transformedIngredient.length ===0){
					 transformedIngredient=(<div className="col-lg-5 offset-3 col-md-6 h2 " style={{width: "50%",
											 height: ""}}>Please start adding ingredients...</div>)
	 	}

		
	return(		
		<Fragment>
		  <div className="container-fluid"  style={{overflow:"",height:"48vh"}}>	
			<div className="row text-center" >
				<Ingredient type="bread-at-top"></Ingredient>
				{/* <Ingredient type="cheese"></Ingredient>
				<Ingredient type="salad"></Ingredient>
				<Ingredient type="meat"></Ingredient> */}
				{transformedIngredient}
				<Ingredient type="bread-at-bottom"></Ingredient>
								
			</div>
		  </div>

			
			
		</Fragment>
	)
}

export default BurgerBuilder;