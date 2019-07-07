# String Exercises

1. console.log the first character of a string.
let word = 'PURSUIT';
console.log(word[0]);
2. console.log the length of a string.
let str = 'PURSUIT';
console.log(str.length);
3. console.log the last character of any string.
let name = 'PURSUIT';
let lastCHar = name.charAt(name.length - 1);
console.log(lastCHar);
4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

```js
'jimmy'
// => 'jimmY'
```
let name1 = 'jimmy';
let lastCHar = name1.charAt(name1.length - 1);
console.log(lastCHar);


5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```
let drEvil = 1000000
if (drEvil[10] ==== '10' drEvil [1000000] === '' {
  console.log('10 dollars');
} else {
  console.log('pinky');
}

6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
For example:

```js
verbing('box')
// => 'boxing'
verbing('train')
// => 'training'
verbing('swimming')
// =>  'swimmingly'
verbing('go')
// =>  'go'
```
let strc = 'box';
let stru = 'train';
strc += ' swimming';
console.log(strc +  'go');

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last
let str50 = 'waddup ganstaaahhh'
str.repeat(2);
