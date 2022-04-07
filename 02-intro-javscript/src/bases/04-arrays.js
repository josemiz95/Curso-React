const array = [1,2,3,4];

let array2 = [...array, 5]; // añade el 5 al array

const array3 = array2.map( num => num+1);

console.log(array);
console.log(array2);
console.log(array3);