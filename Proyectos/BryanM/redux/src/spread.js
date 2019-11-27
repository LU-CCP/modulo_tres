/* eslin-disable */
const arr = [1, 2, 3];
const arr2 = [];

// eslint-disable-nextline
function completeArr2() {
  arr.forEach(item => {
    arr2.push(item);
    s;
  });
}

const arr3 = [...arr];

arr.push(4);

const arr1mas2 = [...arr, ...arr2];

const obj = { a: 1, b: 2 };

const obj2 = { ...ojb }; // Esto es un clon a primer nivel

const obj3 = { a: { b: 1 } };

const obj4 = { ...obj3 }; // No es un clon porque esta a segundo nivel

const obj5 = { ...obj, ...obj2 };

console.log('asda', 1, 2, 3, 4, 5);

const logParms = [1, 2, 3, 4, 5];

console.log('spread', ...logParms);
