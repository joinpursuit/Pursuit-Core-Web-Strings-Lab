//Question 1
let string = "Pursuit";
console.log(string[0]);

//Question 2
let string = "Weather";
console.log(string.length);

//Question 3
let string = "It's finally friday!";
console.log(string[string.length - 1]);

//Question 4
function lastLetterCapitalized(string) {
  console.log(
    string.slice(0, string.length - 1) + string[string.length - 1].toUpperCase()
  );
}
lastLetterCapitalized("Andrew");

//Question 5
function DrEvil(amount) {
  if (amount === 1000000) console.log(amount + " dollars" + " (pinky)");
  else console.log(amount + " dollars");
}
DrEvil(10);
DrEvil(1000000);

//Question 6
function verbing(string) {
  if (
    string.length >= 3 &&
    string.slice(string.length - 3, string.length) === "ing"
  ) {
    string += "ly";
  } else if (string.length >= 3) {
    string += "ing";
  }
  console.log(string);
}
verbing("Hello world");
verbing("He");
verbing("Healing");

//Question 7
function withoutLast(string) {
  let lastChar = string.slice(0, string.length - 1);
  console.log(lastChar);
}
withoutLast("Elephant");
