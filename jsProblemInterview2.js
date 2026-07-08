// level - 3 - find the 2nd largest number in an array
/*
function findSecondMax(arr) {
  if (arr.length <= 2) {
    console.log("Want minimum 2 numbers");
  }

  let firstMax = -Infinity;
  let secondMax = -Infinity; // -Infinity is the smallest number

  for (let num of arr) {
    if (num > firstMax) {
      secondMax = firstMax; // set secondMax to firstMax
      firstMax = num; // set firstMax to num
    } else if (num > secondMax && num < firstMax) {
      secondMax = num;
    }
  }
  if (secondMax === -Infinity) {
    console.log("No second max");
  }
  return secondMax;
//  return ([firstMax, secondMax]); // return first and second max
}

console.log("first array result secondMax  : " , findSecondMax([1, 2, 53, 4, 55, 56, 7, 8, 9, 10]));
console.log(
  'second array result secondMax : ',
  findSecondMax([1, 2, 33, 4, 45, 36, 57, 28, 9, 10, 11])
);
*/
// level - 4 - find the word count in a string
/*
function wordCount(sentence) {
  if (!sentence || sentence.trim() === "") { // check if sentence is empty
    return 0; // return 0 if sentence is empty
  }

let words = sentence.trim().split(/\s+/).filter((x) => x !== ""); // split sentence into words and remove empty words
return words.length;
}
console.log("word count : ", wordCount("Hello world"));
console.log("word count : ", wordCount("Hello world. this is    the world "));
console.log("word count : ", wordCount(" Hello world "));
console.log("word count : ", wordCount(" Hello world. how are you, i  saw you  "));
console.log("word count : ", wordCount(""));
console.log("word count : ", wordCount(null));
console.log("word count : ", wordCount(undefined));
console.log("word count : ", wordCount(0));
*/
//level - 5 : Sum of Array
/*
function sumArray(arr) {
  if (!arr || arr.length === 0) {
    return "Input array is empty";
  }

  let sum = 0;
  for (let ar of arr) {
    sum += ar;
  }
  return sum;
}
console.log("sum array : ", sumArray([1, 2, 3, 4, 5]));
console.log("sum array : ", sumArray([1, 2, 3, 4, 5, 6]));
*/
// Level - 6 Capitalize First Letter of Each Word
/*
function capitalizeFirstLetter(str) {
  // edge case
  // 1 . if user input is null.undefine and just only white space and only one word
  if (!str || str.trim() === "") {
    return "conditional check";
  }
// 2 . split the string into words
  let words = str.trim().split(/\s+/).map (word => word[0].toUpperCase() + word.slice(1)).join(" "); // map the words to capitalize the first letter and gives a new array (convert string using join(" "))
  return words;

}
console.log("capitalize first letter : ", capitalizeFirstLetter("Hello world"));console.log("capitalize first letter : ", capitalizeFirstLetter("Hello world. this is    the world "));
*/
