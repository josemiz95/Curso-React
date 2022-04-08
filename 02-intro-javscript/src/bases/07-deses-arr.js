const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p2] = personajes;

console.log(p2);

const retornaArray = () =>{
    return ['ABC', 123];
}

const [letras, num] = retornaArray();
console.log(letras, num);

const returnF = (valor) => {
    return [ valor, () => {console.log('Hola mundo');} ];
}

const [nombre, holaMundo] = returnF('algo');

console.log(nombre);
holaMundo();