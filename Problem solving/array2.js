/* array-looping-tasks
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output:
['orange', 'yellow', 'green', 'blue', 'red']
*/
// solve : ---

/* const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];
for (let i = colors.length-1; i >= 0; i--){
reversedColors.push(colors[i]);
}
console.log(reversedColors);
*/
/* Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
Output:
[12, 98, 76, 46]
*/
/* Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.
Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output:
'TomTimTinTik'
*/
// solve : ---

/* const numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = '';
for (let number of numbers) {
  result += number;
}
 console.log(result);
*/
/* Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'
Output:
'person working hard a am I'
*/
// solve : ---

/* const statement = 'I am a hard working person';
// its make string into array of words
const words = statement.split(' ');
console.log(words)
// reverse the array
const reverse = words.reverse();
console.log(reverse);
// join the array into a string
const joinWord = reverse.join(' ');
console.log(joinWord);
*/
/* Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
Input: [1, 2, 3]
Expected Output:
Original: [1, 2, 3] Copy: [99, 2, 3]
*/
const array = [1, 2, 3];
console.log(array);
const array1 = [...array];
array1[0] = 99;
array[1] = 2;
array[2] = 3;
console.log(array1);
/* Task 6
Task 6
Given an array of student objects, print each student’s name and marks.
[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ouTPut:
John scored 85
Alice scored 90
*/
// solve : ---
const students = [
  { name: 'John', marks: 85 },
  { name: 'Alice', marks: 90 },
];
// its make array of objects thats why usw [0] to get the first object and then we can access the name and marks
console.log(`${students[0].name} scored ${students[0].marks}`);
console.log(`${students[1].name} scored ${students[1].marks}`);

/*
Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.
input:
[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:
[
  [1, 2],
  [99, 4],
  [5, 6]
]
*/
