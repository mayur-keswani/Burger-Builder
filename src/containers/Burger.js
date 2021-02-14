import React, { Component, Fragment } from 'react'
import BurgerBuilder from '../components/BurgerBuilder/BurgerBuilder.js'
import IngredientContext from '../context/IngredientContext';

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
		purchasing:false
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



	render(){
		const disabledAlterIngredient={...this.state.ingredients};
		for( const ingr in disabledAlterIngredient){
			disabledAlterIngredient[ingr]=(disabledAlterIngredient[ingr]<=0)?true:false
		}


		let sum=0;
		const disabledOrderButton={...this.state.ingredients};
		for( const item in disabledOrderButton){
			sum+=disabledOrderButton[item]
			
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
								   totalPrice={this.state.totalPrice}
								   orderable={orderable}
								   purchasing={this.state.purchasing}
								   allowPurchaseHandler={this.allowPurchaseHandler}
								   modalClosed={this.modalClosed}
								   />
				</IngredientContext.Provider>
			</Fragment>
		)
	}
};

export default Burger