function isPalindrome(word) {
  // Write your algorithm here
  if (word === word.toLowerCase().split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here

  function isPalindrome(word) {
  // Convert the word to lowercase
  word = word.toLowerCase()
  
  // Split the word into an array of individual characters
  word_chars = word.split("")
  
  // Reverse the order of the characters in the array
  word_chars = word_chars.reverse()
  
  // Join the characters back together into a single string
  word = word_chars.join("")
  
  // Check if the resulting string is the same as the original word
  if (word === word.toLowerCase().split("").reverse().join("")) {
    // If it is, return true
    return true
  } else {
    // If it is not, return false
    return false
  }
}

*/

/*
  Add written explanation of your solution here

  This function checks if a given word is a palindrome, 
  which means that it is the same word when read forwards and backwards.
  It does this by first converting the word to lowercase, 
  then splitting it into an array of individual characters,
  reversing the order of the characters in the array,
  and finally joining the characters back together into a single string.
  If the resulting string is the same as the original word, 
  then the function returns true, otherwise it returns false.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
