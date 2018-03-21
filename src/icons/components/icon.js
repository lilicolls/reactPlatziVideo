import React, {Component} from 'react';


function Icon (props) {
	const {
		color,
		size,
	} = props
	return(
		<svg
			fill = {color}
			height = {size}
			widht = {size}
			viewBox = "0 0 32 32"
		>
			{props.children}
		</svg>
	)
}


export default Icon