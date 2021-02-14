import React , { Fragment } from 'react'

import NavigationItem from './NavigationItem'
import Backdrop from '../../UI/Backdrop/Backdrop'
import '../Navigation/SideDrawer.css'
const SideDrawer=(props)=>{
	
	<Backdrop show={props.show}/>
	return(

		<Fragment>
			<div id="sidedrawer" style={{ display:props.show?"block":"none" }}>
				<NavigationItem show={props.show}  direction="column"/>
			</div>
		</Fragment>
	)
}

export default SideDrawer;