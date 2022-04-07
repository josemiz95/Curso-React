const persona = {
    nombre: 'Josemi',
    edad: 26,
    direccion: {
        ciudad: 'falsa',
    },
};

// console.table([persona]);
console.log(persona);

const persona2 = persona; // Se asigna el espacio en memora, es decir son referencias
const persona3 = {...persona}; // Se clona el objeto
persona2.nombre = 'otro nombre';
persona3.nombre = 'soy el 3';

console.log({persona,persona2, persona3});