import React from 'react'
import { Fragment } from 'react'
import logo from '../../../asserts/images/Burger_builder.png'
const Logo=()=>{
	return(
		<Fragment>
			<img src={logo} width="80" height="80" className="d-inline-block align-top img-fluid" alt=""/>
		</Fragment>
	)
}

export default Logo;