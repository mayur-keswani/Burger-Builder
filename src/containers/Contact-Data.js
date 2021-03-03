import React from 'react'
import { Fragment } from 'react'
import { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"

import axios from '../axios-orders'
import Spinner from '../components/UI/Spinner/Spinner'
class ContactData extends Component{
	state={
		email:"",
		address:{
			street:"",
			zipcode:"",
			country:"India"
		},
		payment_mode:"",
		delivery_mode:"",
		loading:false
	}
	orderHandler=(event)=>{
		event.preventDefault();
		this.setState({loading:true});

		let data={
			ingredients:this.props.ingredients,
			price:this.props.totalPrice,
			customer:{
				name:this.state.name,
				address:{
					street:this.state.address.street,
					zipcode:this.state.address.zipcode,
					country:"India"
				},
				email:this.state.email,	
			},
			PaymentMode:this.state.payment_mode,
			deliveryMethod:this.state.delivery_mode
		}
		axios.post('/orders.json',data)	
			.then(res=>{ 
				this.setState({loading:false})
				this.props.history.replace('/orders');
				// this.props.history.push('/')
				
			 })
			.catch(err=>{
				console.log(err)
				this.setState({loading:false});
			})
	}
	render(){
		let content=( 
		<div className="contact-detail mx-auto my-2" style={{width:"80%"}}>
		<h2>Enter Your Details ⬇️</h2>
		<form>
		   <input className="form-control m-2 form-control-lg" 
			   type="text" name="name" placeholder="Name"
			   value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>

		   <input className="form-control m-2 form-control-lg" type="email" name="email" placeholder="Email"
			   value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})}/>

		   <label>Address</label>
		   <input className="form-control m-2 form-control-lg" type="text" name="street" placeholder="Street"
			   />

		   <input className="form-control m-2 form-control-lg" type="number" name="zipcode" placeholder="ZipCode"
			   />

		   <input className="form-control m-2 form-control-lg" type="text" name="country" placeholder="Country"
		   />

		   <label>Mode of Payment</label>
		   <select className="form-control form-control-lg" name="payment_mode" >
				 <option>COD</option>
			   <option>Debit/Credit Card</option>
		   </select>
		   
		   <label>Delivery Mode</label>
		   <select className="form-control form-control-lg" name="delivery_mode">
				 <option>Fast</option>
			   <option>V. Fast</option>
		   </select>

		   <button type="submit" className="m-3 btn btn-success btn-block btn-lg"
			   onClick={this.orderHandler}>Proceed</button>
		</form>
	    </div>);
		if(this.state.loading)
			content=(<Spinner/>)
		return(
			<Fragment>
			  {content}
			</Fragment>
		)
	}
}
export default ContactData