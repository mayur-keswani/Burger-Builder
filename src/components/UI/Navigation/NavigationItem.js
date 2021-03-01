import React,{Fragment} from 'react'

import './Navigation.css'

const NavigationItem=(props)=>{
	let NavBoxFlexClass=[];
	props.type==="horizontal"?NavBoxFlexClass.push("nav-items"):NavBoxFlexClass.push("nav-items-sidedrawer");
	return(
		
		<Fragment>
		<div className="nav-box" style={{display: props.show?"block":"none",opacity:props.show?"1":"0"}}> 
			<ul type="none"  className={NavBoxFlexClass.join(' ')}>
				<li className="nav-item mx-3 px-3 py-4 my-0 h2"><a className="text-decoration-none" href="/">Home</a></li>
				<li className="nav-item mx-3 px-3 py-4 my-0 h2 "><a className="text-decoration-none" 
				href="/checkout">Checkout</a></li>
				
			</ul>
		</div>
		</Fragment>
	)
}

export default NavigationItem


