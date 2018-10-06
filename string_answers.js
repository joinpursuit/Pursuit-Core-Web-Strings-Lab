
let myString = '7 Deadly Sins';
let lastLet =  myString.slice(0, myString.length -1) + myString[myString.length -1].toUpperCase();

// Question 1:

for (let i = 0; i <= myString.length; i++){
}
console.log(myString[0]);

// Question 2:

console.log(myString.length);

// Question 3:

console.log(myString[myString.length -1]);

// Question 4:

console.log(lastLet);

// Question 5:

let amount = 100000;
let drEvil = `${amount} dollars`;
let pinky = `${amount < 1000000 ? drEvil : drEvil += ' (pinky)' }`;

console.log(pinky);


// Question 6:

let verb = 'training';
let verbing = verb.slice(-3);

if (verbing !== 'ing'){
  verb += 'ing';
} else {
  verb += 'ly';
}

console.log(verb);

// Question 7:

let word = 'Gintama';
let withoutLast = `${word.slice(0, word.length -1)}`;

console.log(withoutLast);
