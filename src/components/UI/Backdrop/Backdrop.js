import React from 'react';
import { Fragment } from 'react';

import './Backdrop.css'
const Backdrop=(props)=>{
	return(
		<Fragment>
			<div  className="backdrop" style={{ display:props.show?"block":"none",opacity :props.show?"1":"0" }}></div>
		</Fragment>
	)
}

export default Backdrop;