import React, {Component } from 'react'
import Search from '../components/search.js'


class SearchContainer extends Component {
    state= {
        value: "liliana"
    }


    handleSubmit = (event) => {
        console.log(this.input.value,  "prueba");
        event.preventDefault();
        //enviar datos a servidor con solicitud POST por ej
    }

    setInputRef = element => {
        this.input = element;
    }
    handleInputChange = event => {
        this.setState ({
            value: event.target.value.replace(' ', '-') // this.input

        })
    }

    render(){
        return(
            <Search
                setRef = {this.setInputRef}
                handleSubmit = {this.handleSubmit}
                handleChange  = {this.handleInputChange}
                value = {this.state.value}
           

            />
            )
    }
}

export default SearchContainer