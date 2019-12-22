let c = 0;
mark:for (let i = 0; i < 5; i++){
    inner:for (let j = 0; j < 5; j++){
        c++; if (i == 2) break mark;
      }
console.log(c)
}
let str = 'hello';

if (str.indexOf('a') !== -1
|| str.indexOf('e') !== -1
|| str.indexOf('i') !== -1
|| str.indexOf('o') !== -1
||str.indexOf('u') !== -1
) {
  console.log(true);
} else {
  console.log(false)
}




// loop to find if a string has vowels
// variables defined in a loop can only be called
let found = false;
for (let i = 0; i < str.length; i++) {
 let char = str[i]
  if (char === 'a'
      ||  char === 'e'
      ||  char === 'i'
      ||  char === 'o'
      ||  char === 'i'
    ) {
        found = true
    break;
   }
}
if (found){
      console.log(`${str} has a vowel`)
} else {
      console.log(`${str} doesn't have a vowel`)
}
// # Arrays Lab
//
// To complete this lab (as for most labs), do the following:
//
// 1. Fork this repo.
// 2. Clone **your** forked repo.
// 3. Create a file called `arrays_lab.js` inside your cloned repo.
// 4. Copy the description of the exercise as a comment.
// 5. Underneath the commented description write your code.
// 6. Ensure your solutions work properly!
// 7. Open PR against this repo.
//
// ___
//
// ## Exercises
//
// 1. Log the last element of an array.
let solSystem = ['sun','venus','earth','mars','jupiter','saturn','uranus','neptune']
console.log(solSystem[solSystem.length-1])

// 2. Change the first element of an array to "something else".
let arrMind = ['firt this','hello world', 'hammer time']
arrMind.splice(0,1, 'something else')
console.log(arrMind);

// 3. Add "mango" to the end fruits array ["strawberry", "bannana"].
let fruitsArray= ['strawberry','bannana']
fruitsArray.push('mango')
console.log(fruitsArray)

// 4. Add "blueberry" to the front of the same fruits array.
fruitsArray.unshift('blueberry')
console.log(fruitsArray)

// 5. Remove the last element of the fruits array.
fruitsArray.pop()
console.log(fruitsArray)

// 6. console.log the length of the fruits array.
console.log(fruitsArray.length)

// 7. Remove the first element of the fruits array.
fruitsArray.shift()
console.log(fruitsArray)

// 8. Join all the elements in the fruits array with a '$'.
let arraTest = [1,2,3,4,5]
let ar = arraTest.fill(`$`)
console.log(ar)
// 9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
// ```js
// longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// // returns [1, 2, 3, 4, 5]
//
// longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// // returns ["jets", "mets", "giants", "yankees"]

let arrOne = ['this', 'is', 'an', 'array'];
let arrTwo = ['this', 'is', 'another', 'array', 'blueberry','icecream']

let arrOneString = arrOne.toString()
let arrTwoString = arrTwo.toString()

if(arrOneString.length > arrTwoString.length){
  arrOne = arrOneString.split()
  console.log(arrOne);
} else if (arrOneString ===  arrTwoString) {
    console.log(null);
} else {
    arrTwo = arrTwoString.split()
      console.log(arrTwo);
}

//```
// 10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
// If the array has an even number of elements, the function should log "Oops, there's no middle..."
//
// ```js
// middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']);
//  // 'bat'
//
// middleElement([1, 2, 3, 4, 5]);
// //  3
//
// middleElement([1, "hmm", "wat", 4, 5]);
// //  "wat"
//
// middleElement([1, 2, 3, 4, 5, 6]);
// //  "Oops, there's no middle"
//
// middleElement(["john", "paul", "george", "ringo"]);
// //  "Oops, there's no middle"
// ```

// let arrMid = ['hamburgers','chocolate','strawberry','vanilla','pecan']
//       if ((arrMid.length -1) % 2 === 0){
//             let mid = arrMid[(arrMid.length) / 2]
//                 console.log(mid)
//       }

// 11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
// ```js
// sumArray([1, 2, 3, 4, 5, 6])
// //  21

//sumArray([1, 2, 3, 4, 5, -6])
//  9
let total
let sumArray =[1, 2, 3, 4, 5, 6];
for (let i = 0; i < sumArray.length; i++){
     total += sumArray[i]
}
console.log(total)


// ```
// 12. Write a `range` code block that takes two number variables: min and max.
// The block will log an array with all the numbers, inclusive, between min and max.
// ```js
// range(2, 6)
// => [2, 3, 4, 5, 6]
//
// let min = 3;
// let max = 15;
// range(min,max);
//
// console.log(range());

// 13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
// The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
// If no step value is provided, the increment will be 1.
// ```js
// rangeWithStep(4, 10, 2)
// // => [4, 6, 8, 10]
// rangeWithStep(4, 10)
// // => [4, 5, 6, 7, 8, 9, 10]
// ```
//
// 14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
// The block should log a new array that doubles every number from the original array.
// ```js
// doubleTrouble([1, 2, 3]);
// // returns [2, 4, 6]
// doubleTrouble([10, 8, 5]);
// // returns [20, 16, 10]
// ```
// let dubarr = [5,12,10]
//
// for (i = 0; i <= dubarr.length-1; i++){
//       let arr2 = []
//
//           console.log(arr2);
// }

// 15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.
