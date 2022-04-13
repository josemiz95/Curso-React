import React, { Fragment } from 'react';

const PrimeraApp = () => {
    //Fragment es para evitar poner un div
    let html = (
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicacion</p>
        </Fragment>
    );

    // Forma corta de poner Fragment sin necesidad de importar
    html = (
        <>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicacion</p>
        </>
    );

    return html;
}

export {
    PrimeraApp as default
}