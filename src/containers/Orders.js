import React,{ Fragment , Component } from 'react'
import OrderSummary from '../components/Orders/OrderSummary'
import Burger_Anime from '../asserts/images/burger-animation.gif'

import axios from '../axios-orders'
import withErrorHandler from '../hoc/withErrorHandler'
class Orders extends Component{
	state={
		orders:[],
		loading:true
	}
	componentDidMount(){
		axios.get('/orders.json')
			.then(orders=>{
				this.setState({loading:false})

				let fetchedOrders=[];
				console.log(orders.data)
				for(let key in orders.data){
					fetchedOrders.push({
						id:key,
						...orders.data[key]
					})	

				 console.log(fetchedOrders)
				 this.setState({orders:fetchedOrders})
				}
			})
			.catch(err=>{
				this.setState({loading:false})
				console.log(err)
			})
	}
	render(){
		let orders=(<h2>Sorry!, No Orders Yet...</h2>)
		if(this.state.orders)
			orders=this.state.orders.map(order=>{
						return <OrderSummary key={order.id} 
							ingredients={order.ingredients} 
							price={order.price}/>
		 			})
		return(
		<Fragment>
			<div>
			<header className="mb-5">
				 <div className="d-flex m-auto align-items-center justify-content-center flex-column">
					<div className="text-center h2">Your Orders !</div>
					<img src={Burger_Anime} width="300px" height="250px" alt="order.gif"  ></img>
				 </div>
				 {orders}
			</header>

			 {}
				
			</div>

			
		</Fragment>
		)
	}
}

export default withErrorHandler(Orders,axios)