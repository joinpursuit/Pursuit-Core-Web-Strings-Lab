# String Exercises

1. console.log the first character of a string.

<!-- let string = 'pursuit';
console.log(string[0]); -->

2. console.log the length of a string.

<!-- let string = 'hellooooooooooooo';
console.log(string.length); -->

3. console.log the last character of any string.
<!--
let anyString = 'any string';
anyString[anyString.length - 1] -->

4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

```js
'jimmy'
// => 'jimmY'
```

<!-- let string = 'jimmy';

let lastLetterCap = string.slice(0, string.length - 1) + string[string.length - 1].toUpperCase();

console.log(lastLetterCap); -->

5. Create a drEvil code block that will take a single number variable, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```

<!-- let numberVariable = 1000000;

if (numberVariable === 1000000) {
  console.log(`${numberVariable} dollars (pinky)`);
} else {
   console.log(`${numberVariable} dollars`);
} -->


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
<!-- let singleStringVar = 'bling';

function verbing(string) {
  if (string.slice(string.length - 3) === 'ing') {
    console.log(`${string}ly`);
  } else if (string.length === 3) {
    console.log(`${string}ing`);
  } else {
    console.log(string);
  }
};

verbing(singleStringVar); -->

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last

<!-- let singleStringVar = 'hellomotto';

function withoutLast(singleStringVar) {
  console.log(singleStringVar.slice(0,singleStringVar.length - 1));
};

withoutLast(singleStringVar); -->
