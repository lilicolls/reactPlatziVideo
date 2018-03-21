import React from 'react';
import './search.css'
// function Search () {
//     return (
//         <form action=""></form>
//         )
// }

const Search = (props) =>(

    <form className="Search"
        onSubmit = {props.handleSubmit}
    >
        <input 
            ref = {props.setRef}
            className="Search-input" 
            type="text"
            placeholder="Busca tu video fav"
            value = {props.value}
            onChange = {props.handleChange}
            //defaultValue = "Luis Fonsi "
            
        />

    </form>
)

export default Search