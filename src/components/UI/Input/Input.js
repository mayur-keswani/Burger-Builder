import React ,{ Fragment } from 'react'
import  './Input.css'

const Input = (props) =>{
	let inputElement=null
	let inputElementClass=['form-control m-2 form-control-lg'];
	let message=null
	if(props.isValid==false && props.touched){
		inputElementClass.push('invalid')
	}

	if(props.isValid==false && props.touched){
		message=(<p className="ml-2 text-danger h4 text-lead">{props.message}</p>)
	}
	
	switch(props.element_type){
		case 'input' : 
					inputElement= (<input className={inputElementClass.join(' ')}
						name={props.name} 
						type={props.element_type}	
						placeholder={props.element_config.placeholder}
						value={props.value} 
						onChange={props.changed} />)
						break;
		case "textarea":
					inputElement=(<textarea className={inputElementClass.join(' ')}
									name={props.name} 
									rows={props.element_config.rows}
									cols={props.element_config.cols}
									placeholder={props.element_config.placeholder}
									value={props.value}
									onChange={props.changed}
								/>

					) 
						break;
		case "select":
					  inputElement=(
					  				<Fragment>
										<label>{props.element_config.label}</label>
					  					<select name={props.name} 
										  		className="form-control-lg form-select  form-select-lg m-3"
												value={props.value}
												onChange={props.changed}>
					   						{
									 			props.element_config.options.map(option=>{
										  			 return (
														<option value={option.value}>{option.displayValue}</option>)
									   			})
											}
					  				</select>
									  </Fragment>  
									)
						break;
				
		default:
	}

	return(
		<Fragment>
			{inputElement}
			{message}
		</Fragment>
	)

}

export default Input