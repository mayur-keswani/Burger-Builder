import React from 'react'

import Layout from '../components/Layout/Layout'
import Burger from './Burger';
import Checkout from './Checkout'
import Orders from './Orders'
import {Switch, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
const App=()=>{

	return(
		<React.Fragment>
			<Layout>
				<Switch>
					<Route path="/checkout"  component={Checkout}/>
					<Route path="/orders"  component={Orders}/>
					<Route path="/" exact  component={Burger}/>
				</Switch>
				{/* <Burger/>
				<Checkout/> */}
			</Layout>
		</React.Fragment>
	)
}

export default App;