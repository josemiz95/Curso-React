import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ nombre, subtitulo }) => {    
    	//Fragment es para evitar poner un div
    	let html = (
		<>
			<h1>Hola {nombre}</h1>
			<p>{subtitulo}</p>
		</>
	 );

	 return html;
}

// Validacion de tipo de objectos
PrimeraApp.propTypes = {
	nombre: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
	subtitulo: 'Este es el valor por defecto'
};

export {
	PrimeraApp as default
}