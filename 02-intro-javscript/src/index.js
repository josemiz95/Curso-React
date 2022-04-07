const saludar = function (nombre){
    return `Hola, ${nombre}`;
} // para evitar que se reemplace por una variable o constante

const saludar2 = nombre =>  `Hola, ${nombre}`;

// Importante para hacer lo mismo y retornar un objecto hay que ponerlo entre parentesis
const devuelveObjeto = () => 
    ({
        nombre: "hola",
        edad: 1
    });

console.log(saludar("nombre"));
console.log(saludar2("nombre2"));
console.log(devuelveObjeto());