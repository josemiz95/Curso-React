import {getHeroeById} from './bases/08-export-import';

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        const heroe =  getHeroeById(id);

        if(heroe !== null && typeof heroe !== 'undefined')
            resolve(heroe);

        reject('Error al encontrar el heroe');
    });
};

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);