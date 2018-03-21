import react, { Component } from 'react'
import { createPortal } from 'react-dom'

const modal = document.getElementById('modal-container')
// creatPortal (que voy a renderizar, donde)
class ModalContainer extends  Component {
	
	render() {
		return createPortal( this.props.children, modal)
	}
}

export default ModalContainer