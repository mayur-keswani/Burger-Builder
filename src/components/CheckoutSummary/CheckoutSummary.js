import React , { Fragment } from 'react'
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder'
// import OrderSummary from '../OrderSummary.js'
const CheckoutSummary = (props) =>{
	//console.log(props.ingredients)
	return(
		<Fragment>
			<BurgerBuilder ingredients={props.ingredients}/>
			{/* <OrderSummary ingredients={props.ingredients} totalPrice={props.totalPrice}/> */}
		</Fragment> 
	)
}

export default CheckoutSummary