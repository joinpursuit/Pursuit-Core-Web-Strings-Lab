//# String Exercises

//1. `console.log` the first character of a string.
let name = "Jones"
console.log(name[0]);

//2. `console.log` the length of a string.
name = "Jones"
console.log(name.length);

//3. `console.log` the last character of any string. 
name = "Jones"
console.log(name[name.length-1]);

//4. Create a code block that takes a single string variable, and returns a copy of the 
//string with the last letter capitalized. For example:
// ```js
// 'jimmy'
// // => 'jimmY'
// ```

name = "jimmy"
let capitalized = name.slice(0,name.length-1) + name[name.length-1].toUpperCase()
console.log(capitalized)

// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```




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


let verbing = "box"
let num = verbing.length

if(Number(num) > 2){
    if(verbing[verbing.length-3]+verbing[verbing.length-2]+verbing[verbing.length-1] === "ing"){
        console.log(verbing + "ly")
    }else {
        console.log( verbing + "ing")
    }

}else {
    console.log(verbing +" Else statment")
}