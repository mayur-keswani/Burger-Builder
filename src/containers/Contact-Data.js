import React from 'react'
import { Fragment } from 'react'
import { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"
class ContactData extends Component{
	render(){
		return(
			<Fragment>
			   <div className="contact-detail" className="mx-auto my-2" style={{width:"80%"}}>
			     <h2>Enter Your Details ⬇️</h2>
				 <form>
					<input class="form-control m-2 form-control-lg" type="text" placeholder="Name"/>
					<input class="form-control m-2 form-control-lg" type="email" placeholder="Email"/>
					<label>Address</label>
					<input class="form-control m-2 form-control-lg" type="text" placeholder="Street"/>
					<input class="form-control m-2 form-control-lg" type="number" placeholder="ZipCode"/>
					<input class="form-control m-2 form-control-lg" type="text" placeholder="Country"/>

					<label>Mode of Payment</label>
					<select class="form-control form-control-lg">
  						<option>COD</option>
						<option>Debit/Credit Card</option>
					</select>
					
					<label>Delivery Mode</label>
					<select class="form-control form-control-lg">
  						<option>Fast</option>
						<option>V. Fast</option>
					</select>

					<button type="submit" className="m-3 btn btn-success btn-block btn-lg">Proceed</button>
				 </form>
				</div>
			</Fragment>
		)
	}
}
export default ContactData