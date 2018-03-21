import React, {Component} from 'react';
import RegularError from '../components/regular-error.js'

class HandleError extends Component {
	state = {
		handleError: false
	}
	componentDidCatch (error, info ) {
		this.setState({
			handleError: true
		})
		//envia este error a un servicio tipo sentry
	}
	render(){
		if (this.state.handleError) {
			return <RegularError/>
		
		} else{
			 return this.props.children}
	}
		
}

export default HandleError