import React from 'react'
import { Fragment } from 'react'

const OrderSummary=(props)=>{
	// useEffect(()=>{
	// 	console.log("[Inside OrderSummary]")
	// },[props.ingredients])

	
	const ingredientsSummary=Object.keys(props.ingredients).map(ingr=>{
		return (<li className="h3" key={ingr}>{ingr}:{props.ingredients[ingr]}</li>)
	})

	return(
		<Fragment>
			<div className="h2">Your Order!!</div>
			<p className="h4">A delicious burger with following ingredients</p>
				<ul type="square">
					{ingredientsSummary}
				</ul>
			<p className="h3">Total Price : <span className="text-light bg-dark p-2">{props.totalPrice}</span></p>
			
		</Fragment>
	)
}

export default OrderSummary;