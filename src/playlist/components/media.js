import React, {Component}  from 'react';
import {PureComponent} from 'react';
import './media.css';
import PropTypes from 'prop-types';
 
// Se crea componente extendiendo de la clase React.Component
// y se llama al metodo render de la clase
// El estilo del componente se puede enviar a travez de className o 
// como un objeto 
class Media extends PureComponent {
  //al ser un clase de js puedo utilizar el metodo constructor
  //al instanciar la clase

  // constructor(props) {
  //   super (props) // Esto siempre se debe hacer
  //  // this.handleClick = this.handleClick.bind(this) cambiando el contexto de this en la funcion handleClick 
  //  this.state = {
  //   author: props.author

  //  }
  // }

  state = {
      //iniciar el estado de acuerdo a ECMASCRIPT 7 no es necesario el constructor
    author: 'Liliana Colls'
  }

  // handleClick = (ev) => {           //usando arrow function para hacer el bind de this de manera automatica 
  //                                   // las arrow function heredan el scope
  //   this.setState({
  //     author: 'liliana Colls'

  //   })
  // }


  render() {
	// const styles = {
	// 	container: {
	// 		color: '#44546b',
	// 		cursor: 'pointer',
	// 		width: 260,
	// 		border:'2px solid red'
	// 	}
	// }

    return (
      //<div style= {styles.container}>
      <div className= "Media" onClick = {this.props.handleClick}>
        <div className="Media-cover">
          <img className = "Media-image"
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
          />
          <h3 className = "Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

//validar el tipo de las propiedades del componente Media

Media.propTypes = {
	cover: PropTypes.string ,
	title: PropTypes.string.isRequired, //establezco que la propiedad es obligatoria
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio']) //establezo que el string recibido es uno de los del array
}


export default	Media;