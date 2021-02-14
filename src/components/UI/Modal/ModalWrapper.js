import React,{ Fragment } from "react";
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import Spinner from '../Spinner/Spinner'
const ModalWrapper =(props)=> {
	let  content=(props.spinner)?(<Spinner/>):props.children

		return(
			
			<Fragment>
				<Backdrop show={props.show}/>
				<div className="modalBox" style={{ transform: props.show?"translateY(0)":"translateY(-100vh)" ,
													display: props.show?"block":"none", 
												   opacity : props.show?"1":"0" }}>

					{content}

					{/* <p className="h4">Continue to Checkout??</p> */}
					<button className="btn btn-outline-danger btn-lg m-2" onClick={props.modalClose}>Cancel</button>
					<button className="btn btn-success btn-lg" onClick={props.clicked}>Continue</button>

				</div>
			</Fragment>
		)
	
	
}

export default  React.memo(ModalWrapper)