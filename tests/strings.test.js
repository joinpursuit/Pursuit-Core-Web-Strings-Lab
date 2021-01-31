const {
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
} = require("../problems/strings");

describe("firstChar", () => {
  test("returns the first character", () => {
    expect(firstChar("")).toBe("");
    expect(firstChar("Corey")).toBe("C");
    expect(firstChar("cat")).toBe("c");
    expect(firstChar("bird")).toBe("b");
  });
});

describe("stringLength", () => {
  test("returns the length of the string", () => {
    expect(stringLength("Corey")).toBe(5);
    expect(stringLength("cat")).toBe(3);
    expect(stringLength("bird")).toBe(4);
    expect(stringLength("")).toBe(0);
  });
});

describe("lastLetter", () => {
  test("returns the last letter of the string", () => {
    expect(lastLetter("Corey")).toBe("y");
    expect(lastLetter("cat")).toBe("t");
    expect(lastLetter("bird")).toBe("d");
    expect(lastLetter("")).toBe("");
  });
});

describe("capitalizeLastLetter", () => {
  test("returns the string with a captialized last latter", () => {
    expect(capitalizeLastLetter("")).toBe("");
    expect(capitalizeLastLetter("jimmy")).toBe("jimmY");
    expect(capitalizeLastLetter("cat")).toBe("caT");
    expect(capitalizeLastLetter("bird")).toBe("birD");
  });
});

describe("drEvil", () => {
  test("adds dollars to amounts less than 1 million", () => {
    expect(drEvil(10)).toBe("10 dollars");
    expect(drEvil(125)).toBe("125 dollars");
  });
  test("adds (pinky) to amounts 1 million or greater", () => {
    expect(drEvil(1_000_000)).toBe("1000000 dollars (pinky)");
    expect(drEvil(1_000_000_000)).toBe("1000000000 dollars (pinky)");
  });
});

describe("verbing", () => {
  test("words less than three are unchanged", () => {
    expect(verbing("I")).toBe("I");
    expect(verbing("am")).toBe("am");
  });
  test("adds ing to the end of words", () => {
    expect(verbing("box")).toBe("boxing");
    expect(verbing("train")).toBe("training");
  });
  test("adds ly to words that already end in ing", () => {
    expect(verbing("swimming")).toBe("swimmingly");
    expect(verbing("skipping")).toBe("skippingly");
  });
});

describe("removeLastWord", () => {
  test("removes the last word of a string", () => {
    expect(removeLastWord("Hello!")).toBe("");
    expect(removeLastWord("Hello word")).toBe("Hello");
    expect(removeLastWord("I eat cake")).toBe("I eat");
  });
});

describe("everyOtherLetter", () => {
  test("returns a string with the even indexed characters", () => {
    expect(everyOtherLetter("Corey")).toBe("Cry");
    expect(everyOtherLetter("Hello World")).toBe("HloWrd");
  });
  test("does not use split", () => {
    const funcString = everyOtherLetter.toString();
    expect(funcString.includes("split")).toBe(false);
  });
});

describe("disemvowel", () => {
  test("removes all the vowels from a string", () => {
    expect(disemvowel("Hello World!")).toBe("Hll Wrld!");
    expect(disemvowel("COREY")).toBe("CRY");
    expect(disemvowel("aeiou")).toBe("");
  });
});

describe("disemvowelLongWords", () => {
  test("removes all the vowels from a string", () => {
    expect(disemvowelLongWords("Hello World!")).toBe("Hll Wrld!");
    expect(disemvowelLongWords("COREY")).toBe("CRY");
    expect(disemvowelLongWords("Hi, I have awesome nice friends")).toBe(
      "Hi, I have wsm nice frnds"
    );
  });
});

describe("middleCharacter", () => {
  test("returns the middle character for odd length strings", () => {
    expect(middleCharacter("Corey")).toBe("r");
    expect(middleCharacter("cat")).toBe("a");
  });
  test("returns the middle two characters for even length strings", () => {
    expect(middleCharacter("Miss")).toBe("is");
    expect(middleCharacter("kitten")).toBe("tt");
  });
});

describe("reverseString", () => {
  test("reverses a string", () => {
    expect(reverseString("Hello world")).toBe("dlrow olleH");
    expect(reverseString("cats are the best")).toBe("tseb eht era stac");
  });
  test("does not split the string", () => {
    const funcString = reverseString.toString();
    expect(funcString.includes("split")).toBe(false);
  });
});

describe("reverseSentenceWords", () => {
  test("reverse each word but leaves the order unchanged", () => {
    expect(reverseSentenceWords("cats are the best")).toBe("stac era eht tseb");
    expect(reverseSentenceWords("Hello world")).toBe("olleH dlrow");
  });
});
