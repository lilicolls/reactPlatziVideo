import React from 'react';
import {render	} from 'react-dom';
//import Playlist from '../playlist/components/playlist.js';
import data from '../api.json'
import Home from '../pages/containers/home.js'


const homeContainer = document.getElementById('home-container');
const texto = <h1>el fucing rock! </h1>;
// ReactDOM.render(que voy a renderizar, donde lo haré);
//render(<Media type = "video" title="¿Que es responsive desing?" author="Leonidas Esteban" image= "./covers/responsive.jpg"/> ,app);


render(<Home data = {data} />, homeContainer);






