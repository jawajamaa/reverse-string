function reverseString(str) {
  if (!str) {
    let reversedStr = "";
    return reversedStr;
  } else {
    let reversedStr = "";
    for (const char of str) {
      reversedStr = char + reversedStr;
    };
    return reversedStr;
  };
  }
// console.log(reverseString("ybabtac"));

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
