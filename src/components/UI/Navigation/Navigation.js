import React from 'react'
import NavigationItem from './NavigationItem'
import './Navigation.css';
import {FiAlignJustify} from 'react-icons/fi'

import Logo from './Logo'
const Navigation=(props)=>{
  return(
    <div id="navbar">
		<span className="brand-logo mr-5"><Logo/></span>
		<NavigationItem show={props.show} type="horizontal"/>
    
    <button className=" btn btn-lg p-5 toggleSideDrawer " onClick={props.closeSideDrawer}><FiAlignJustify/></button>
    
    </div>
  )
}

export default Navigation;