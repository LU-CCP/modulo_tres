const arr1 = [1, 2, 3];
const arr2 = [];

// eslint-disable-next-line no-unused-vars
function completarArr2() {
  arr1.forEach(item => {
    arr2.push(item);
  });
}

// eslint-disable-next-line no-unused-vars
const arr3 = [...arr1];

arr1.push(4);

// eslint-disable-next-line no-const-assign
arr1 = [...arr1, 5];

// eslint-disable-next-line no-unused-vars
const arr1mas2 = [...arr1, ...arr2];

const obj = { a: 1, b: 2 };

const obj2 = { ...obj }; // clon a primer nivel

const obj3 = { a: { b: 1 } };
// eslint-disable-next-line no-unused-vars
const obj4 = { ...obj3 }; // no es un clon porque esta a segundo nivel

// eslint-disable-next-line no-unused-vars
const obj5 = { ...obj, ...obj2 };

const logParams = [1, 2, 3, 4, 5];

console.log('spread', ...logParams);
