// ## String Exercises
// 1. console.log the first character of a string.
console.log("######## Prob 1 ###########");

let str = "abcde";
console.log(str[0]);
// 2. console.log the length of a string.
console.log("######## Prob 2 ###########");

console.log(str.length);
// 3. console.log the last character of any string. 
console.log("######## Prob 3 ###########");

console.log(str[str.length-1]);
// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
// ```js
// 'jimmy'
// // => 'jimmY'
// ```
console.log("######## Prob 4 ###########");

console.log(str.slice(str[str.length-1]) + str[str.length-1].toUpperCase());

// 5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```
console.log("######## Prob 5 ###########");

let num = 10000001;
num === 1000000 ? console.log(`${num} dollars (pinky)`) : 
console.log(`${num} dollars`);
// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
// For example:

// ```js
// verbing('box')
// // => 'boxing'
// verbing('train')
// // => 'training'
// verbing('swimming')
// // =>  'swimmingly'
// verbing('go')
// // =>  'go'
// ```
 console.log("######## Prob 6 ###########");

let word = "struggling";
	if(word.length >= 3){
		if(word.slice(word.length-3) == 'ing'){
			console.log(`${word}ly`);
		}else{
			console.log(`${word}ing`);
		}
	}else{
		console.log(`${word}`);
	}
// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last 
console.log("######## Prob 6 ###########");

let newWord = "pursuit";
console.log(newWord.slice(newWord[0], newWord.length - 1));



