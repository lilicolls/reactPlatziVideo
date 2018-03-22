import React, { Component }from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-contronls'
import {formattedTime} from '../../utilities.js'
import ProgressBar from '../components/progress-bar.js';
class VideoPlayer extends Component {
    
    state= {
        pause: true,
        duration: 0,
        currentTime: 0,
        timeFloat: 0,
        durationFloat: 0
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
            duration: formattedTime(this.video.duration),
            durationFloat: this.video.duration
        })
    }
    handleTimeUpdate = event =>{
        this.setState({
            currentTime: formattedTime(this.video.currentTime),
            timeFloat: this.video.currentTime
        })
    }

    handleProgressChange= event =>{
        
       this.video.currentTime = event.target.value //setea el valor del video al valor que tenga el progressBar
    }                                               //en caso de que el usuario genere el evento de cambio del pb

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
                        <ProgressBar
                         duration = {this.state.durationFloat}
                         value = {this.state.timeFloat}
                         handleProgressChange = {this.handleProgressChange}
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