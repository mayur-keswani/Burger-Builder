import React from 'react'
import './OrderSummary.css'


const OrderSummary=(props)=> {
		return(
					 <div className="order-list mx-2">
					  <ul>
						<li>Ingredients:
							<ul>
								<li>Cheese [ {props.ingredients.cheese} ]</li>
								<li>Salad [ {props.ingredients.salad} ]</li>
								<li>Meat [ {props.ingredients.meat} ]</li>
							</ul>
						</li>
						<li><b>Price:</b> {props.price}</li>	
					  </ul>
				     </div>
		)
	
}

export default OrderSummary