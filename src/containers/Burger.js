import React, { Component, Fragment } from 'react'
import BurgerBuilder from '../components/BurgerBuilder/BurgerBuilder.js'
import IngredientContext from '../context/IngredientContext';


import Controllers from '../components/BurgerBuilder/Controller/Controllers'
import ModalWrapper from '../components/UI/Modal/ModalWrapper'
import OrderSummary from '../components/OrderSummary';

import axios from '../axios-orders';
import withErrorHandler from '../hoc/withErrorHandler'

let INGREDIENT_PRICE={
	cheese:40,
	salad:25,
	meat:70
}

class Burger extends Component
{
	state={
		ingredients:{
			salad:0,
			cheese:0,
			meat:0,
		},
		totalPrice:40,
		purchasing:false,
		loading:false
	}

	
	addIngredientHandler=(type)=>{
		let updatedIngredient={...this.state.ingredients};
		updatedIngredient[type]=updatedIngredient[type] + 1;
		let oldTotalPrice=this.state.totalPrice;
		let updatedTotalPrice=oldTotalPrice + INGREDIENT_PRICE[type]
		
		this.setState({
			ingredients:updatedIngredient,
			totalPrice :updatedTotalPrice	
		})
		
	}

	removeIngredientHandler=(type)=>{
		let updatedIngredient={...this.state.ingredients};
		updatedIngredient[type]=updatedIngredient[type]-1;
		let updatedTotalPrice=this.state.totalPrice;
		updatedTotalPrice=updatedTotalPrice-INGREDIENT_PRICE[type]

		this.setState({
			ingredients:updatedIngredient,
			totalPrice:updatedTotalPrice
		})
	}

	allowPurchaseHandler=()=>{
		this.setState({
				purchasing:true
			})
	}

	modalClosed=()=>{
		this.setState({
			purchasing:false
		})
	}

	orderHandler=()=>{
		let queryParams=[];
		for(let ingr in this.state.ingredients){
			queryParams.push( encodeURIComponent(ingr)+'='+this.state.ingredients[ingr] )
		} // ["meat = 2 ","cheese = 1"]

		queryParams=queryParams.join("&");  // [ "meat = 2 & cheese = 1"];



		// this.setState({loading:true});

		// let data={
		// 	ingredients:this.state.ingredients,
		// 	price:this.state.totalPrice,
		// 	customer:{
		// 		name:"John Doe",
		// 		address:{
		// 			street:"testStreet",
		// 			zipcode:382475,
		// 			country:"India"
		// 		},
		// 		email:"test@test.com",	
		// 	},
		// 	PaymentMode:"COD",
		// 	deliveryMethod:"Fast"
		// }
		// axios.post('/orders.json',data)	
		// 	.then(res=>{ 
		// 		this.setState({loading:false})
		// 		this.modalClosed()
		// 		console.log(res);
		// 	 })
		// 	.catch(err=>{
		// 		this.setState({loading:false});
		// 		console.log(err);
		// 	})
		this.props.history.push({
			pathname:"/checkout",
			search:'?'+queryParams
		})
	 }


	render(){
		const disabledAlterIngredient={...this.state.ingredients};
		for( const ingr in disabledAlterIngredient){
			disabledAlterIngredient[ingr]=(disabledAlterIngredient[ingr]<=0)?true:false
		}


		let sum=0;
		const disabledOrderButton={...this.state.ingredients};
		for( const item in disabledOrderButton){
			sum+=disabledOrderButton[item];
		}
		
		let orderable=(sum>0)?true:false	
		
		return(
			<Fragment>
				<IngredientContext.Provider value={{ 
												ingredients:this.state.ingredients,
												addIngredient:this.addIngredientHandler,
												removeIngredient:this.removeIngredientHandler,
												disabledInfo:disabledAlterIngredient,
												
												}}>
					<BurgerBuilder ingredients={this.state.ingredients} 
								   orderable={orderable} />

					<ModalWrapper 
						modalClose={()=>this.modalClosed()} 
						show={this.state.purchasing} 
						clicked={()=> this.orderHandler()} 
						spinner={this.state.loading}>

							<OrderSummary  ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>

					</ModalWrapper>
				
					<Controllers 
						totalPrice={this.state.totalPrice} 
						orderable={orderable} 
						allowPurchaseHandler={()=>this.allowPurchaseHandler()}>

					</Controllers>			   
				</IngredientContext.Provider>
			</Fragment>
		)
	}
};

export default withErrorHandler(Burger,axios)