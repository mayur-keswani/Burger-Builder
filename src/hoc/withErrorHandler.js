import React ,{ Component } from 'react'
import { Fragment } from 'react';

import ModalWrapper from '../components/UI/Modal/ModalWrapper';

const withErrorHandler=(WrappedComponent,axios)=>{
	
	return class extends Component{
		state={
			error:null
		}
		constructor(props)
		{	
			super(props)
			 this.reqInstance=axios.interceptors.request.use(req=>{
				this.setState({error:null})
				return req;
			})
			 this.resInstance=axios.interceptors.response.use(res=>res,error=>{
				this.setState({
					error:error
				})
			})
		}
		componentWillUnmount(){
			axios.interceptors.request.eject(this.reqInstance)
			axios.interceptors.request.eject(this.resInstance)
		}
		
		modalClose=()=>{
			this.setState({error:null})
		}
		render(){
			return(
				<Fragment>
					<ModalWrapper  show={this.state.error} spinner={false} modalClose={()=>this.modalClose()} clicked={this.modalClose}>
						{this.state.error?this.state.error.message:null}
					</ModalWrapper>
			
					<WrappedComponent {...this.props}/>
				</Fragment>
			)
		}
		
	}
}

export default withErrorHandler;