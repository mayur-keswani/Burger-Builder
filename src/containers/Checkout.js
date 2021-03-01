import React , {Fragment ,Component} from 'react'

import CheckoutSummary from '../components/CheckoutSummary/CheckoutSummary'
import ContactData from './Contact-Data'
import "bootstrap/dist/css/bootstrap.css"
import {Route} from 'react-router-dom'
class Checkout extends Component{
	state={
		ingredients:{
			cheese:0,
			meat:0,
			salad:0
		},
		totalPrice:0
	}

	componentDidMount(){
		const ingredients={};
		// ?salad=1&cheese=2
		const query = new URLSearchParams(this.props.location.search)
		
		//[ [salad] ,  [1] ]
		for(let param of query.entries()){
			ingredients[param[0]]=+param[1];
		}
		//console.log(query.entries())
	
		this.setState({
			ingredients:ingredients
		})
	}


	cancelOrderHandler=()=>{
		this.props.history.goBack();
	}
	continueOrderHandler=()=>{
		this.props.history.push('/checkout/contact-detail')
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

			  <Route path="/checkout/contact-detail" exact component={ContactData}/>	
			</Fragment>
		)
	}
}

export default Checkout