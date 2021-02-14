import React from 'react'
import './Spinner.css'
import spinner from '../../../asserts/images/Radio-0.6s-200px.gif'
const Spinner=()=>{
	return(
		<div className="text-center"><img src={spinner} alt="loading"/></div>
	)
}
export default Spinner

