/*
-------------------DESTRUCTURING EXERCISES-----------------------
*/

/*
------------------OBJECT DESTRUCTURING 1-------------------------
--------What does the following code return/print?---------------
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

---------------------------ANSWER----------------------------------
console.log(numPlanets) will print 8
console.log(yearNeptuneDiscovered) will print 1846
*/

/*
------------------OBJECT DESTRUCTURING 2-------------------------
--------What does the following code return/print?---------------
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?

---------------------------ANSWER----------------------------------
console.log(discoveryYears) will print the following object:
{
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
}
*/

/*------------------OBJECT DESTRUCTURING 3-------------------------
--------What does the following code return/print?-----------------
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?

------------------------------ANSWER---------------------------------
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) returns
'Your name is Alejandro and you like purple'

getUserData({firstName: "Melissa"}) returns
'Your name is Melissa and you like green

getUserData({}) returns
'Your name is undefined and you like green'
*/

/*------------------ARRAY DESTRUCTURING 1--------------------------
--------What does the following code return/print?-----------------
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?

------------------------------ANSWER---------------------------------
console.log(first); -----> will print Maya
console.log(second); ----> will print Marisa
console.log(third); -----> will print Chi
*/


/*------------------ARRAY DESTRUCTURING 2--------------------------
--------What does the following code return/print?-----------------
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?

------------------------------ANSWER---------------------------------
console.log(raindrops); // ----> will print 'Raindrops on roses'
console.log(whiskers); // ? ---> will print 'whiskers on kittens'
console.log(aFewOfMyFavoriteThings); // ---> will print ["Bright copper kettles", "warm woolen mittens","Brown paper packages tied up with strings"]
*/

/*------------------ARRAY DESTRUCTURING 3--------------------------
--------What does the following code return/print?-----------------
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?

------------------------------ANSWER---------------------------------
console.log(numbers) ----> will print [10, 30, 20]
*/

/*------------------ARRAY DESTRUCTURING 3--------------------------
--------------ASSIGNING VARIABLES TO OBJECT PROPERTIES-------------
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
*/

let obj = {
    numbers:{
        a: 1,
        b: 2
    }
}
const {numbers : {a , b}} = obj;

//------------------------ARRAY SWAP-------------------------------
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

let arr = [1 , 2];
[arr[0],arr[1]] = [arr[1], arr[0]];

//------------------------RACE RESULTS-------------------------------
// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)

const raceResults = arr => {
    const [first, second, third, ...rest] = arr;
    return{
        first,
        second,
        third,
        rest
    }
}


