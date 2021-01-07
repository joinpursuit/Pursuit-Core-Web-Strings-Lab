/**
 * Returns the first character of a string passed in.
 * @param {string} str - an input string
 * @returns {string} - first char of str
 * 
 * example: firstChar("banana") returns "b"
 * example: firstChar("pinapple") returns "p"
 * example: firstChar("") returns ""
 */
function firstChar(str) {
    if (str.length === 0) {
        return ""
    }
    return str[0]
}

console.log(firstChar("banana"))
console.log(firstChar("pinapple"))
console.log(firstChar(""))

/**
 * Returns the length of a string
 * @param {string} str - an input string
 * @returns {number} - length of str
 * 
 * example: stringLength("what") returns 4
 * example: stringLength("sixteen") returns 7
 */
function stringLength(str) {
    return str.length
}

console.log(stringLength("what")) //returns 4
console.log(stringLength("sixteen")) //returns 7

/**
 * Returns the last character of any string
 * @param {string} - an input string
 * @returns {string} - last letter of the input string
 * 
 * example: lastLetter("zappa") returns "a"
 * example: lastLetter("sit on a potato pan otis") returns "s"
 * example: lastLetter("") returns ""
 */

function lastLetter(str) {
    if (str.length > 0) {
        return str[str.length - 1]
    }
    return ''
}

console.log(lastLetter("zappa")) //returns "a"
console.log(lastLetter("sit on a potato pan otis")) //returns "s"
console.log(lastLetter("")) //returns ""

/**
 * Takes a string and returns a copy of the string with the last
 * letter capitalized.
 * @param {string} str - an input string
 * @returns {string} - the input string with the last letter capitalized
 * 
 * example: capitalizeLastLetter("jimmy") returns "jimmY"
 * example: capitalizeLastLetter("what is the meaning of life") returns "what is the meaning of lifE"
 */
function capitalizeLastLetter(str) {
    //let lastStr = str.slice(0, str.length - 1) + str[str.length-1].toUpperCase
    //str = str[0].toUpperCase()
    let lastStr = str[str.length - 1]
    if (str.length === 0) {
        return ''
    }
    return str.slice(0, (str.length - 1)) + lastStr.toUpperCase()
}

console.log(capitalizeLastLetter("jimmy"))


/**
 * Create a drEvil function that takes in a number
 * and returns "${number} dollars"
 * if the number is greater than 1 million, add (pinky) at the end
 * 
 * @param {number} num
 * @returns {string}
 * example: drEvil(10) returns "10 dollars"
 * example: drEvil(100000000) returns "100000000 dollars (pinky)"
 */
function drEvil(num) {
    if (num >= 1000000) { return `${num} dollars (pinky)` }
    return `${num} dollars`
}

/**
 * verbing() should take a string. 
 * If its length is >= 3, it should add 'ing' to its end, unless it already ends in 'ing',
 * in which case it should add 'ly' instead. 
 * If the string length is less than 3, it should leave it unchanged. 
 * @param {string} str
 * @returns {string}
 * verbing('box') returns 'boxing'
 * verbing('swimming') returns  'swimmingly'
 * verbing('go') returns  'go'
 */
function verbing(str) {
    let endStr = str.slice((str.length - 3), (str.length))
    if (str.length >= 3 && endStr === 'ing') {
        return str + `ly`
    } else if (str.length >= 3 && endStr != 'ing') {
        return str + `ing`
    }
    return str
}

console.log(verbing('box'))


/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string} str - an input string
 * @returns {string} - the return value missing the last word
 * 
 * example: removeLastWord("Hello!") returns ""
 * example: removeLastWord("I eat cake") returns "I eat"
 */
function removeLastWord(str) {
    let lastWord = str.lastIndexOf(" ")
    return str.substring(0, lastWord)
}

console.log(removeLastWord("I eat cake"))

// function removeLastWord(str) {
//   let chars = str.split(' ')
//   let i = 0
//   let finishedSentence = ''
//   if(chars.length === 1){
//     return ''
//   }
//   while(i < chars.length - 1) {
//     if(i < 1){
//       finishedSentence = finishedSentence + chars[i]
//     }
//     else{
//       finishedSentence = finishedSentence + " " + chars[i]
//     }
//     i++
//   }
//   return finishedSentence

// }


/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string} str - an input string
 * @returns {string} - the return value containing even indexed characters
 * 
 * example: everyOtherLetter("Corey") returns "Cry"
 * example: everyOtherLetter("Skull candy") returns "Sulcny"
 */
function everyOtherLetter(str) {
    let other = ""
    let i = 0
    while (i < str.length) {
        other = other + str[i]
        i += 2
    }
    return other

}

console.log(everyOtherLetter("Corey"))


/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string} str - an input string
 * @returns {string} - return value string with all vowels removed
 * 
 * example: disemvowel("aeiou") returns ""
 * example: disemvowel("Hello world!") returns "Hll wrld!"
 */
function disemvowel(str) {
    let i = 0
    let catcher = ''
    while (i < str.length) {
        if ((str[i] !== 'a') && (str[i] !== 'e') && (str[i] !== 'i') && (str[i] !== 'o') && (str[i] !== 'u')) {
            if ((str[i] !== 'A') && (str[i] !== 'E') && (str[i] !== 'I') && (str[i] !== 'O') && (str[i] !== 'U')) {
                catcher = catcher + str[i]
            }
        }
        i++
    }
    return catcher
}

console.log(disemvowel("Hello world!"))

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string} str - an input string
 * @returns {string} - return value string
 * 
 * example: disemvowelLongWords("hi i am your friend") returns "hi i am your frnd"
 * example: disemvowelLongWords("amber is the color of your energy") returns "mbr is the clr of your nrgy"
 */
function disemvowelLongWords(str) {
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].length > 4)
            arr[i] = disemvowel(arr[i])
    }
    return (arr.join(" "))
}

console.log(disemvowelLongWords("hi i am your friend"))

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string} str - an input string
 * @returns {string} - the return value string, either one or two characters
 * 
 * example: middleCharacter("hello") returns "l"
 * example: middleCharacter("ostentatious") returns "ta"
 */
function middleCharacter(str) {
    let middleChar = Math.floor(str.length / 2)
    if (str.length % 2 === 1) {
        return str[middleChar]
    } else {
        return str[middleChar - 1] + str[middleChar]
    }
}

console.log(middleCharacter("ostentatious"))

/**
 * Takes in a string and reverses it.
 * Do not use .split()
 * 
 * example: reverseString("hello") returns "olleh"
 * example: reverseString("sit on a potato pan otis") returns "sito nap otatop a no tis"
 * 
 * @param {string} str - an input string
 * @returns {string} - the return value string, reversed str
 */
function reverseString(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

console.log(reverseString("hello"))

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string} str - an input string
 * @returns {string} - the return value string
 * 
 * example: reverseSentenceWords("hello world") returns "olleh dlrow"
 * example: reverseSentenceWords("i am a racecar") returns "i ma a racecar"
 */

function reverseSentenceWords(str) {
    let array = str.split(" ")
    for (let i = 0; i < array.length; i++) {
        array[i] = reverseString(array[i])
    }
    return array.join(" ")
}

console.log(reverseSentenceWords("hello world"))

module.exports = {
    firstChar,
    stringLength,
    lastLetter,
    capitalizeLastLetter,
    drEvil,
    verbing,
    removeLastWord,
    everyOtherLetter,
    disemvowel,
    disemvowelLongWords,
    middleCharacter,
    reverseString,
    reverseSentenceWords,
};