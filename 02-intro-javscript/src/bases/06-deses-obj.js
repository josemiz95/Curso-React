const persona = {
    nombre: "Josemi",
    edad: 26,
    superpoder: "kk",
    direccion: {
        calle: "falsa",
        num: 123
    }
};

// asignacion desectructurante
const { nombre, edad } = persona;
const { nombre:nombre2 } = persona;

console.log(nombre, edad);
console.log(nombre2);

const { direccion:{calle} } = persona;
console.log(calle);

// Desestructuracion en argumentos de funcion
const retornaPersona = ({ nombre, edad, rango = "Alguien" }) => {
    return {
        nombreClave: nombre+rango,
        edad
    }
}

const {nombreClave} = retornaPersona(persona);

console.log(nombreClave);