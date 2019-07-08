//1
let word = 'PURSUIT';
console.log(word[0]);

//2
let str = 'PURSUIT';
console.log(str.length);

//3
let name = 'PURSUIT';
let lastCHar = name.charAt(name.length - 1);
console.log(lastCHar);

//4
let name1 = 'jimmy';
let lastCHar2 = name1.charAt(name1.length - 1);
console.log(lastCHar2);

//5
let drEvil = '10';
if (drEvil[5] === '0' || drEvil [2] === '0') {
  console.log('pinky');
} else {
  console.log('10 dollars');
}

//6
let strc = 'train';
let stru = 'box';
if (strc = 'box' || 'train') {
  console.log(stru + 'ing');
} else
console.log(strc + 'ing');

//7
let str50 = 'go shawty its ya birthday';
let fifty = str50.slice(10, 25);
console.log(fifty);

//Bonus4;
let str7 = 'help';
str7 += 'me';
console.log(str7.charAt(2) +  'me');
