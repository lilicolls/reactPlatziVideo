import React, { Component }from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-contronls'
import {formattedTime} from '../../utilities.js'
class VideoPlayer extends Component {
    
    state= {
        pause: true,
        duration: 0,
        currentTime: 0
     }

    togglePlay= (event) =>{   
        this.setState({
            pause: !this.state.pause
        })

    }    
    componentDidMount(){ //metodo para que el estado del boton play/pause inicialice con el estado del video
        this.setState({
            pause: !this.props.autoplay
        })
    }

    handleLoadedMetada = event =>{
        this.video = event.target
        this.setState({
            duration: formattedTime(this.video.duration)
        })
    }
    handleTimeUpdate = event =>{
        
        this.setState({
            currentTime: formattedTime(this.video.currentTime)
        })
    }
    render(){
        return(
                    <VideoPlayerLayout>
                        <Title
                            title = "Prueba"
                        />
                        <Controls>
                        <PlayPause
                            pause = {this.state.pause}
                            handleClick = {this.togglePlay}
                        />
                        <Timer 
                            duration ={this.state.duration}
                            currentTime = {this.state.currentTime}
                        />
                        
                        </Controls>
                       
                       <Video
            
                        autoplay = {this.props.autoplay}
                        src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                        pause = {this.state.pause}
                        handleLoadedMetada = {this.handleLoadedMetada}
                        handleTimeUpdate = {this.handleTimeUpdate}
                       />
                    </VideoPlayerLayout>
                )
    }
            
        
}

export default VideoPlayer