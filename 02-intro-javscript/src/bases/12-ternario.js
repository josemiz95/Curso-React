const activo = true;

let mensaje1 = activo ? 'Mensaje1' : null;

// es lo mismo que

let mensaje2 = activo && 'Mensaje2';
let mensaje3 = !activo && 'Mensaje2';

console.log(mensaje1, mensaje2, mensaje3);