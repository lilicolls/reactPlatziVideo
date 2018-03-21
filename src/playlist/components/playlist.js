import React, {Component} from 'react';
import Media from './media.js';
import './playlist.css'
import Play from '../../icons/components/play.js'
import Volumen from '../../icons/components/volumen.js'
import Pause from '../../icons/components/pause.js'
import FullScreen from '../../icons/components/full-screen.js'

// class Playlist extends Component {

// 	render () {
// 		const categories = this.props.data.categories;
// 		//const playlist = this.props.data.categories.playlist;
// 		console.log(categories);
// 		return(
			
// 				categories.map((categoria)=>{
// 				//console.log(categoria)
// 				return	<div className ="Playlist">{
// 					categoria.playlist.map((item)=>{
// 					//	console.log (item)
// 				 return	<Media {...item} key = {item.id} />
// 				 })
// 				}</div>
// 				}) 

// 		)
// 	}
// }

function Playlist (props){
	//const playlist = props.data.categories[0].playlist;

	return (
		<div className ="Playlist">
				{
					props.playlist.map((item)=>{
						return <Media handleClick = {props.handleOpenModal} {...item} key= {item.id}/>

					})
				}
		</div>
		)
}

export default Playlist;