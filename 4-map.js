var assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that takes in array of strings with every element converted to uppercase

//1. type of input? array
//2. type of the output? array
//3. length of input and output is the same? yes
// ===> map
//4. what is the mapping function?
// one example input: "hello" -> output: "HELLO"
function convertToUpperCase(array) {
  return array.map(a => a.toUpperCase())
}


// Assertions (do not change)
assertEquals(convertToUpperCase(["hello"]), ["HELLO"]);
assertEquals(convertToUpperCase(["hello", "gOOdBYE"]), ["HELLO", "GOODBYE"]);


/* ---------------------- EXERCISE 1 ---------------------- */
// define a function that multiplies all elements in an array by 10

// input?array, output?array, input&output length?same, map
function multiplyBy10(array) {
  return array.map(a => a*10)
}


// Assertions (do not change)
assertEquals(multiplyBy10([1, 2]), [10, 20]);
assertEquals(multiplyBy10([3, 5, 7]), [30, 50, 70]);
assertEquals(multiplyBy10([-1, 0, 1]), [-10, 0, 10]);


/* ---------------------- EXERCISE 2 ---------------------- */
// define a function that takes in an array objects and returns only an array of strings of the name field

//input?array, output?array, samelength?yes
function onlyNames(array) {
  return array.map(input => input.name);
}

// Assertions (do not change)
var input = [
  {
    name: "homer",
    favorite: "donuts"
  },
  {
    name: "marge",
    favorite: "family"
  },
  {
    name: "lisa",
    favorite: "school"
  }
];

assertEquals(onlyNames(input), ["homer", "marge", "lisa"]);

/* ---------------------- EXERCISE 3 ---------------------- */
// define a function that removes any non-vowel character from words in an array

//think of some sample arrays e.g. input['hello','world','how are you', 'shj223 aaa']
//output ['eo', 'o','oaeou','aaa']
//input?array, output?array, lengthofinput?4, lengthofoutput?4, -> map)
//f('hello') and returns eo -> split to [h,e,l,l,o] input?arr,out?arr,samelegnth?no -> .filter
//f('how are you) // eaeou
//function keepBowels(string) {
//  

function isVowel(character) {
  vowel = ['a','e','i','o','u']
  return vowel.indexOf(character) > -1
}

// function keepOnlyVowels(array) {
//   const mapped = array.map(string => string.split(''));
//   console.log(mapped)
//   const filtered = mapped.filter(function(char){
//     vowels = ['a','e','i','o','u'];
//     return vowels.indexOf(char) > -1;
//   })
//   console.log(filtered);
//   return filtered.join('');
// }

function getVowels(array){
  return array.split('').filter(isVowel).join('');
}

function keepOnlyVowels(array) {
  return array.map(getVowels)
}


  // const toLetters = array.map( string => string.split(''))
  // return toLetters.filter( function(letter) {

  //   console.log(letter)
  //   return vowels.indexOf(letter) > -1;




// Assertions (do not change)
assertEquals(keepOnlyVowels(["abc"]), ["a"]);
assertEquals(keepOnlyVowels(["exceptional"]), ["eeioa"]);
assertEquals(keepOnlyVowels(["average", "exceptional", "amazing"]), [
  "aeae",
  "eeioa",
  "aai"
]);
