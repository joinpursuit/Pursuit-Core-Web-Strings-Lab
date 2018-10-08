let str = "Weekdays";
if (str.length % 2 === 0) {
  console.log( str[str.length / 2 - 1 ] + str[str.length / 2 ])
} else {
  console.log(str[Math.floor(str.length / 2)]);
}
