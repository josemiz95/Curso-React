const nombre = 'Josemi';
const appellido = 'Ruiz';

const nombreCompleto = `${nombre} ${appellido}`;

console.log(nombreCompleto);

function getSaludo (nombre){
    return 'Hola '+ nombre;
}

console.log(`prueba para: ${getSaludo(nombreCompleto)}`);