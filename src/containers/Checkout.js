import React , {Fragment ,Component} from 'react'

import CheckoutSummary from '../components/CheckoutSummary/CheckoutSummary'
import ContactData from './Contact-Data'

import {Route} from 'react-router-dom'
class Checkout extends Component{
	state={
		ingredients:{},
		totalPrice:0
	}

	componentDidMount(){
		// super(props)
		const ingredients={};
		// ?salad=1&cheese=2
		const query = new URLSearchParams(this.props.location.search)
		let price=0
		//[ [salad] ,  [1] ]
		for(let param of query.entries()){
			if(param[0]==='price'){
				price=param[1]
			}
			else{
				ingredients[param[0]]=+param[1];
			}
		}
		//console.log(query.entries())
		//console.log(ingredients)
		this.setState({
			ingredients:ingredients,
			totalPrice:price
		})
	}


	cancelOrderHandler=()=>{
		this.props.history.goBack();
	}
	continueOrderHandler=()=>{
		this.props.history.replace('/checkout/contact-detail')
	}
	render(){
		
		return(
			<Fragment>
			 <h1 className="text-center">Great Choice !</h1>
				<CheckoutSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>
			  <section id="checkoutController" className="mt-2 d-flex align-items-center justify-content-center">
				<button className=" btn-danger btn-lg mx-2" onClick={this.cancelOrderHandler}>CANCEL</button>
				<button className=" btn-success btn-lg" onClick={this.continueOrderHandler}>CONTINUE</button>
			  </section>

			  <Route path="/checkout/contact-detail" exact 
			  		render={(props)=>
					  	<ContactData ingredients={this.state.ingredients} 
									 totalPrice={this.state.totalPrice} {...props} />
							}/>	
			</Fragment>
		)
	}
}

export default Checkout