/*
let str = "Weekdays";
if (str.length % 2 === 0) {
  console.log( str[str.length / 2 - 1 ] + str[str.length / 2 ])
} else {
  console.log(str[Math.floor(str.length / 2)]);
}
*/
let str = "pears";
let midIdex = Math.floor(str.length / 2);
if (str.length % 2) {
  console.log(str[midIdex]);
} else {
  console.log(str.slice(midIdex -1,midIdex + 1));
}
