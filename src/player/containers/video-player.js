import React, { Component }from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause'

class VideoPlayer extends Component {
    state= {
        pause: true,
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

    render(){
        return(
                    <VideoPlayerLayout>
                        <Title
                            title = "Prueba"
                        />
                        <PlayPause
                            pause = {this.state.pause}
                            handleClick = {this.togglePlay}
                        />
                       <Video
            
                        autoplay = {this.props.autoplay}
                        src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                        pause = {this.state.pause}
                        
                       />
                    </VideoPlayerLayout>
                )
    }
            
        
}

export default VideoPlayer