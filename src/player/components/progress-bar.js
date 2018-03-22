import React from 'react'
import './progress-bar.css'
function progressBar (props){
    //console.log(props.value)
    return(
        <div className = "ProgressBar"> 
          <input type = "range"
            min = {0}
            max = {props.duration}
            value = {props.value}
            onChange = {props.handleProgressChange}
          >
          </input>
        </div>
    )
}

export default progressBar