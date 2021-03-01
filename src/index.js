import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import {BrowserRouter } from 'react-router-dom'
import App from './containers/App'

let app=(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
)


ReactDOM.render(app,document.getElementById("root"));