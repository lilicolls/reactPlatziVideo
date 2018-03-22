import React, { Component } from 'react';
import './video.css'

class Video extends Component {
    togglePlay(){
        if(this.props.pause){
            this.video.play()
        }else{
            this.video.pause()
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause){
            this.togglePlay()
        }
    }
    setRef= element =>{
        this.video = element
    }
    render(){
        const {
            handleLoadedMetada,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props

        return(
            <div className = "Video">
                <video   
                    autoPlay= {this.props.autoplay}
                    src= {this.props.src}
                    ref = {this.setRef}
                    onLoadedMetadata = {handleLoadedMetada}
                    onTimeUpdate = {handleTimeUpdate}
                    onSeeking = {handleSeeking} //evento que se dispara cuando el video se esta moviendo
                    onSeeked = {handleSeeked} //ya se movió

                />
            </div>
            )
    }
}

export default Video