const mashUp = (str1, str2) => {
	let firstHalf;
	let secondHalf;
	if (str1 % 2 === 0) {
		firstHalf = str1.slice(0, Math.floor(str1.length % 2));
		console.log(firstHalf);
		secondHalf = str1.slice(Math.floor(str1.length % 2));
	} else {
		firstHalf = str1.slice(0, Math.round(str1.length % 2));
		secondHalf = str1.slice(Math.floor(str1.length % 2));
	}
	return firstHalf + str2 + secondHalf;
};

console.log(mashup("help", "me"));
