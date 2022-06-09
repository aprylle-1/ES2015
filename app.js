
/*
---------ARROW FUNCTIONS EXERCISES-----------------
*/
// Refactor the above code to use two arrow functions. Turn it into a one-liner.
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }
const double = arr => arr.map(val => val * 2);

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }
const squareAndFindEvens = numbers => {
    const squares = numbers.map(num => num ** 2);
    const evens = squares.filter(square => square % 2 === 0)
    return evens;
}

/*
---------REST AND SPREAD OPERATORS EXERCISES-----------------
*/
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...arguments) => {
    return arguments.filter(num => num%2 === 0)
}

//------------------------------------------------------------
/*
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.
*/


const findMin = (...args) => {
    return Math.min(...args);
}

/*
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/

const mergeObjects = (...objs) => {
    return objs.reduce((finalObj, currObj) => {
            return finalObj = {...finalObj, ...currObj};
    })
}

/*
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
*/

const doubleAndReturnArgs = (arr, ...args) => {
    let doubled = args.map(arg => arg * 2);
    return [...arr, ...doubled];
}

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

const removeRandom = items =>{
    const remove = Math.floor(Math.random() * items.length);
    return [...items.slice(0, remove), ...items.slice(remove + 1)];
}

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (array1 , array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */
// function removeKey(obj, key) {
    
// }
const user = {
    'username' : 'aprylle',
    id : 67136,
    student_year : 2012
}
const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}
/** Combine two objects and return a new object. */
// function combine(obj1, obj2) {

// }

const combine = (obj1, obj2) => {
    let combinedObj = {...obj1, ...obj2};
    return combinedObj;
}

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}