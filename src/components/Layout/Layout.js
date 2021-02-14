import React ,{ Component }  from 'react'

import Navigation from '../UI/Navigation/Navigation'
import SideDrawer from '../UI/Navigation/SideDrawer'

class Layout extends Component{
	state={
		toggleSideDrawer:false,
	}
	setToggleSideDrawer=()=>{
		
		this.setState({
			toggleSideDrawer:!this.state.toggleSideDrawer
		})
	}
	render(){
		return(
			<div>
			
			<Navigation show={true} closeSideDrawer={()=>this.setToggleSideDrawer()}/>
			<SideDrawer show={this.state.toggleSideDrawer}/>
			<div>{this.props.children}</div>

			</div>
		)
	}

}

export default Layout;