import React from 'react';
import './video-player-layout.css'

// const VideoPlayerLayout = () => (
//         return(
//             <video 
//                 src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4">

//             </video>
//             )
//     )

function VideoPlayerLayout(props) {
    return(
            <div className ="VideoPlayer">
                {props.children}
            </div>
        )

}

export default VideoPlayerLayout