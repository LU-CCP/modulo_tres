/* eslint-disable no-unused-vars */
// se usan en arreglos, objetos y para pasar argumentos a funciones
const arr = [1, 2, 3]; // quiero llenar el 1 con el 2
const arr2 = [];

function completarArr2() {
  arr.forEach(item => {
    arr2.push(item);
  });
}

// vacia too lo q  tiene el 1 en el 3

const arr3 = [...arr]; // mutable, si cambio algo en arr se cambia en en arr3

arr.push(4);
const arr5 = [...arr, 2]; // agrega el 2
const arr1mas2 = [...arr, ...arr2]; // merge de dos arreglos

const obj = { a: 1, b: 2 };

// objeto 2 va a ser igual al 1, clon a primer nivel, apuntan a distinta referencia de numero
// const obj2 = Object.assign({}, obj);

const obj3 = { a: { b: 1 } };
// const obj4 = Object.assign({}, obj3); //no es un clon pq esta a segundo nivel

const obj5 = { ...obj }; // pasarle las propiedades a traves del script
const obj6 = { ...obj, ...obj5 }; // merge

const logParams = [1, 2, 3, 4, 5];

console.log('spread', ...logParams); // console.log('sbbkv',1,2,3,4,5)
