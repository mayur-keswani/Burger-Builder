import React from 'react'

import Layout from '../components/Layout/Layout'
import Burger from './Burger';

import "bootstrap/dist/css/bootstrap.css";
const App=()=>{

	return(
		<React.Fragment>
			<Layout>
					<Burger/>
			</Layout>
		</React.Fragment>
	)
}

export default App;