import axios from 'axios'

const instance=axios.create({
	baseURL:'https://burgerbuilder-94372-default-rtdb.firebaseio.com/'
})

export default instance;