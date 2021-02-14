import React, { Fragment, useState } from 'react';

import Ingredient from './Ingredients/Ingredients'
import Controllers from './Controller/Controllers'


import ModalWrapper from '../UI/Modal/ModalWrapper'
import OrderSummary from '../OrderSummary'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler'

const BurgerBuilder=(props)=>{
	const [loading ,setLoading]=useState(false);

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
	
			console.log(transformedIngredient);	

		 if(transformedIngredient.length ===0){
					 transformedIngredient=(<div className="col-lg-5 offset-3 col-md-6 h2 " style={{width: "50%",
											 height: ""}}>Please start adding ingredients...</div>)
	 	}

		const orderHandler=()=>{
			setLoading(true);

			let data={
				ingredients:props.ingredients,
				price:props.totalPrice,
				customer:{
					name:"John Doe",
					address:{
						street:"testStreet",
						zipcode:382475,
						country:"India"
					},
					email:"test@test.com",	
				},
				PaymentMode:"COD",
				deliveryMethod:"Fast"
			}
			axios.post('/orders',data)	
				.then(res=>{ 
					setLoading(false)
					props.modalClosed()
					console.log(res);
				 })
				.catch(err=>{
					setLoading(false);
					console.log(err);
				})
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

			<ModalWrapper ingredients={props.ingredients} totalPrice={props.totalPrice} modalClosed={props.modalClosed} show={props.purchasing} clicked={()=> orderHandler()} spinner={loading}>
				<OrderSummary  ingredients={props.ingredients} totalPrice={props.totalPrice}/>
			</ModalWrapper>
				
			<Controllers totalPrice={props.totalPrice} orderable={props.orderable} allowPurchaseHandler={props.allowPurchaseHandler}>

			</Controllers>
			
		</Fragment>
	)
}

export default withErrorHandler(BurgerBuilder,axios);