1)

let name = "deyvi";

console.log(name[0]);

2)

let animal = "panther";

console.log(animal.length);

3)

let city = "New York";

console.log(city[city.length - 1]);

4)

let state = "princesa";

let capitalized = state.slice(0, -2)  + state[state.length -1].toUpperCase();

console.log(capitalized);

5)

let num = 100000000;

if (num < 1000000) {
  console.log(`${num} dollars`);
} else {
    console.log(`${num} dollars (pinky)`);
}

6)

let action = "bo";

if (action.length < 3) {
  console.log(action);
} else if (action.slice(-3) === "ing") {
  console.log(action = action + "ly");
} else if (action.length >= 3) {
   console.log(action = action + "ing");
}

7)

let word = "deyvi";

withoutLast = word.slice(0, -1);

console.log(withoutLast);
