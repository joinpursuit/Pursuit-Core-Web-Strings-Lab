//1. `console.log` the first character of a string.
console.log(' ');
console.log('Question 1~~~~~~~~~');
console.log(' ');

let name = 'Kameron';

console.log('The first letter of my name is ' + name[0] + '.');

//2. `console.log` the length of a string.
console.log(' ');
console.log('Question 2~~~~~~~~~');
console.log(' ');

let company = 'From Software';

console.log('My favorite company has ' + company.length + ' characters.');

//3. `console.log` the last character of any string.
console.log(' ');
console.log('Question 3~~~~~~~~~');
console.log(' ');

let food = 'Apple';

console.log('The last letter in ' + food + ' is ' + food[food.length - 1] + '.');

//4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
console.log(' ');
console.log('Question 4~~~~~~~~~');
console.log(' ');

let pet = 'dinosaur';

let copyPet = pet.slice(0, pet.length - 1) + pet[pet.length - 1].toUpperCase();

console.log('Jurassic Park is now open with our new ' + copyPet + '.');

//5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
//your code block should add '(pinky)' at the end of the amount if it's 1 million.
console.log(' ');
console.log('Question 5~~~~~~~~~');
console.log(' ');

for (amount = 10; amount <= 1000000; amount *= 10) {
  if (amount === 1000000) {
    console.log(amount + ' dollars (pinky).');
  } else {
    console.log(amount + ' dollars... no wait sorry...');
  }
}

//6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
console.log(' ');
console.log('Question 6~~~~~~~~~');
console.log(' ');

let verbWord = 'surprising';

switch (verbWord.length >= 3) {
  case true:
    if (verbWord.slice(verbWord.length - 3) === 'ing') {
      console.log(verbWord + 'ly');
    } else {
      console.log(verbWord + 'ing');
    }

    break;
  default:
    console.log(verbWord);
}

//7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.
console.log(' ');
console.log('Question 7~~~~~~~~~');
console.log(' ');

let fullName = 'Boa Hancock';
let withoutLast = '';

for (i = fullName.length - 1; i >= 0; i--) {
  if (fullName[i] === ' ') {
    withoutLast = fullName.slice(0, i);
    console.log(withoutLast);
    break;
  }
}

//## Bonus Questions
//1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
//print/log the result
console.log(' ');
console.log('Bonus Question 1~~~~~~~~~');
console.log(' ');

let person = 'Chopper';
let person2 = 'Zoro';
let personHastag = '';

if (person.length % 2 !== 0) {
  personHastag = person + '#';
  console.log(person + ' or ' + person2);
  console.log('The person with an odd number of characters in their name is ' + personHastag);
}

//2. Write a code block that prints/logs the 3rd to last characters of a string.
//If the string is not at least 3 characters long then log an error message.
console.log(' ');
console.log('Bonus Question 2~~~~~~~~~');
console.log(' ');

let word = 'Caution';

if (word.length >= 3) {
  console.log('Last 3 characters of ' + word + ' are \"' + word.slice(word.length - 3) + '\".');
} else {
  console.log('The word \"' + word + '\" is not long enough');
}

//3. Write a code block that prints/logs whether a string `x` starts with a vowel.
console.log(' ');
console.log('Bonus Question 3~~~~~~~~~');
console.log(' ');

let vowelCheck = 'eatting';

console.log('I could make the incoming word start with a lower or upper case character or I could check in default for the case sensitivity I want.');

switch (vowelCheck[0].toLowerCase()/* OR use this and default "vowelCheck[0]"*/) {
case 'a':
  console.log(vowelCheck + ' Starts with the vowel A.');
  break;
case 'e':
  console.log(vowelCheck + ' Starts with the vowel E.');
  break;
case 'i':
  console.log(vowelCheck + ' Starts with the vowel I.');
  break;
case 'o':
  console.log(vowelCheck + ' Starts with the vowel O.');
  break;
case 'u':
  console.log(vowelCheck + ' Starts with the vowel U.');
  break;
default:
  if (vowelCheck[0] === 'A' || 'E' || 'I' || 'O' || 'U') {
    //This part of the if will never run as long as I make the switch expression convery the character to lower case
    console.log('Please use lowercase characters');
  } else {
    console.log(vowelCheck + ' does not begin with a vowel.');
  }
}

//4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`
console.log(' ');
console.log('Bonus Question 4~~~~~~~~~');
console.log(' ');

let planet = 'Earth';
let collider = 'Asteroid';
let afterMath = planet.slice(0, Math.ceil(planet.length / 2))
              + collider
              + planet.slice(Math.ceil(planet.length / 2, planet.length));

console.log('When ' + planet + ' met a ' + collider + ' the Dinosaurs said ' + afterMath);

//5. Write a code block that prints/logs whether a string `x` has at least one vowel in it.
console.log(' ');
console.log('Bonus Question 5~~~~~~~~~');
console.log(' ');

let x = '';
let vowelCount = x.replace(/[^aeiou]/gi, '').length;

console.log('For vowelCount I am replacing all characters that are not a vowel with a blank\n space and then counting the remaining characters which should be vowels. The ^\n means NOT aeiou because we want to target everything that is not a vowel\n and remove it. The g means globally to the string and the i next to it \n disregards casesensitivity.\n');

console.log('There are ' + vowelCount + ' vowels in ' + x + '.');

if (vowelCount > 0) {
  console.log(x + ' has a vowl.');
} else if (x === '') {
  console.log(x + ' is an empty string.');
} else {
  console.log(x + ' does not have a vowel');
}
