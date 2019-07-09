
// String Exercises
// 1.
// console.log the first character of a string.
// let str = 'Good'
// console.log(str[0])
// ------------------------------------------------
// 2.
// console.log the length of a string.
// console.log(str.length)
//-------------------------------------------------
// 3.
// console.log the last character of any string.
// let word = 'Good morning!'
// console.log(word[11])
// console.log(word[word.length-1])
// -----------------------------------------------------------------------------------------------------------------------------------------
// 4.
// Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

// 'jimmy'
// => 'jimmY'
// let lastName = 'bazi'
// // lastName = lastName[0] + lastName[1] + lastName[2] + lastName[3].toUpperCase()
// // console.log(lastName)
// let capitalizedLast = lastName.slice(-1).toUpperCase()
// let firstLetters = lastName.slice(0, lastName.length - 1)
// console.log(capitalizedLast)
// console.log(firstLetters)
// console.log(firstLetters + capitalizedLast)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5.
// Create a drEvil code block that will take a single number variable, and log the ' dollars', your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ------------------------------
//
// let word = "dollars"
// let num = 20
// let sentence = num + ' ' + word
// console.log(sentence)
// let x = 20
// let sentence = `${x} dollars`
// console.log(sentence)
// --------------------------------
// let x = 2000000
// let sentence = `${x} dollars \(pinky)`
// console.log(sentence)
// ---------------------------------------------------------------------------------------------------------------------
// 6.
// Create a verbing code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// verbing('box')
// // => 'boxing'
// verbing('train')
// // => 'training'
// verbing('swimming')
// // =>  'swimmingly'
// verbing('go')
// =>  'go'
// ----------------------------------------------

// let verb = 'train'
//  1st case verb already ends in "ing"
// ten append 'ly' at the end
//
// 2nd case verb.leghth > 3. not end in already 'ing'
//  append 'ing' at the ends
//  3rd case.length < 3. console
//==>'walking'
// if(verb.endsWith('ing')){
//   console.log(`${verb}ly`)
// } else if (verb.length >= 3 ) {
//   console.log(`${verb}ing`)
// } else {
// console.log(verb)
// }
// ====================================
// 7.
// Create a withoutLast code block that takes a single
// string variable, and returns a copy of the string
// without the last word.
// 1)
// let name = 'Sihame'
// let name2 = name.slice(0, name.length-1)
// console.log(name2)
// 2)
// let str = 'Sihame'
// let lastIndex = str.lastIndexOf(" ");
// str2 = (str.slice(0, lastIndex));
// console.log(str2)
// 3)
// let str = 'Sihame'
// console.log(str.slice(0, -1));

// ----------------------
// Bonus Questions
// Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is. print/log the result
//
// Examples:
//
// let name = 'taq'  // should log 'taq#'
// let name2 ='john' // should log 'john'
// Write a code block that prints/logs the 3rd to last characters of a string. If the string is not at least 3 characters long then log an error message.
//  Hint
// It should work for strings of any length.
// Examples, for variables:
//
// let name1 = 'Taq' // Should log 'Taq'
// let sentence = 'He is Taq'// Should log 'Taq'
// Write a code block that prints/logs whether a string x starts with a vowel.
//  Extra
// Make it case insensitive
//
// Write a code block that given two strings, str1 and str2, prints/logs a new string with str2 mashed into the middle of str1
// Examples:
//
// For str1 = 'help' and str2 = 'me'. Your program should log 'hemelp'
//
// For str1 = 'hello' and str2 = 'world'. Your program should log 'helworldlo'
//
// Write a code block that prints/logs whether a string x has at least one vowel in it.
// Examples:
//
// For x = 'taq'. Your program should log 'taq' has a vowel'
// For x = 'dfghjkl'. Your program should log 'dfghjkl' does not have a vowel'
// For x = '' Your program should log '' does not have a vowel'
//  Extra & Hint:
// Hint: Abstain from using loops. Explore string methods.
//
// Extra: Make it case insensitive. So that for x = 'TAQ' it should log 'TAQ' has a vowel
