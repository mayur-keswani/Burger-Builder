import React , { Fragment , Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"

import axios from '../axios-orders'
import Spinner from '../components/UI/Spinner/Spinner'
import Input from '../components/UI/Input/Input'
class ContactData extends Component{
	state={
		formData:{
			email:{
				element_type:"input",
				element_config:{
					type:"text",
					placeholder:"Email",
				},
				value:"",
				validation:{
					required:true,
					
				},
				validationMessage:null,
				isValid:false,
				touched:false
			},
			street:{
				element_type:"input",
				element_config:{
					type:"text",
					placeholder:"Street",
				},
				value:"",
				validation:{
					required:true,
					minLength:5,
					
				},
				validationMessage:"Please enter valid street name !",
				isValid:false,
				touched:false
			},
			zipcode:{
				element_type:"input",
				element_config:{
					type:"number",
					placeholder:"Zipcode"
				},
				value:"",
				validation:{
					required:true,
					minLength:5,
					
					
				},
				validationMessage:"Please enter valid Zipcode !",
				isValid:false,
				touched:false
			},
			country:{
				element_type:"input",
				element_config:{
					type:"text",
					placeholder:"Country"
				},
				value:"",
				validation:{
					required:true,
				},
				validationMessage:"Please enter valid Country name !",
				isValid:false,
				touched:false
			},
			payment_mode:{
				element_type:"select",
				element_config:{
					type:"text",
					options:[{value:"cash",displayValue:"COD"},
							 {value:"debit-credit",displayValue:"Debit/Credit"}],
					label:"Payment Mode"
				},
				value:"",
				validation:{},
				isValid:true,
			},
			delivery_mode:{
				element_type:"select",
				element_config:{
					type:"text",
					options:[{value:"fast",displayValue:"Fast"},
							 {value:"normal",displayValue:"Normal"}],
					label:"Delivery Mode"
				},
				value:"",
				validation:{},
				isValid:true,
				
			},
		
		},
		// email:"",
		// address:{
		// 	street:"",
		// 	zipcode:"",
		// 	country:"India"
		// },
		// payment_mode:"",
		// delivery_mode:"",
		loading:false,
		isFormValid:false
	}

	checkValidation=(value,validation)=>{
		let isValid=true
		if(validation.required){
			isValid= value.trim()!=='' && isValid
		}
		if(validation.minLength){
			isValid = value.length>=validation.minLength && isValid
		}
		if(validation.maxLength){
			isValid = value.length<=validation.maxLength && isValid
		}
		return isValid
	}



	inputChangeHandler=(event,element_name)=>{
		let updatedFormData={...this.state.formData}
		let updatedElementData={...updatedFormData[element_name]}

		updatedElementData.value=event.target.value;
		updatedElementData.isValid=this.checkValidation(event.target.value, updatedElementData.validation)
		updatedElementData.touched=true;
		// console.log(updatedElementData)

		updatedFormData[element_name]=updatedElementData
		this.setState({formData:updatedFormData})

		let isFormValid=true
		for(let key in updatedFormData)
			isFormValid=updatedFormData[key].isValid && isFormValid

		this.setState({isFormValid:isFormValid})
	}



	orderHandler=(event)=>{
		event.preventDefault();
		this.setState({loading:true});

		let customer={};
		for(let elem in this.state.formData){
			//console.log(elem)
			customer[elem]=this.state.formData[elem].value
		}
		let data={
			ingredients:this.props.ingredients,
			price:this.props.totalPrice,
			customer:customer
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
		let formArray=[];
		for (let key in this.state.formData){
			formArray.push({ id : key ,  config: this.state.formData[key]  })
			
		}

		//console.log(formArray)
		let contactForm=(
			<form onSubmit={this.orderHandler}>	
				{
					formArray.map(elem=>{
						return <Input key={elem.id} element_type={elem.config.element_type} 
								element_config={elem.config.element_config}
								value={elem.config.value}
								changed={(event)=>this.inputChangeHandler(event, elem.id)}	
								isValid={elem.config.isValid}
								touched={elem.config.touched}
								 message={elem.config.validationMessage}
								/> })
				}
				<button className="btn btn-success btn-lg mt-2 mx-auto" disabled={!this.state.isFormValid}>Submit</button>
			</form>
		)
			
		

		let content=( 
		<div className="contact-detail mx-auto my-2" style={{width:"80%"}}>
		<h2>Enter Your Details ⬇️</h2>
			{contactForm}		
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