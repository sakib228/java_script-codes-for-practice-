/* 1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jamBuRa
console log the final array
*/
// solve : ---

/* 2. Add or remove elements
Declare an array of 5 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/
// solve : ---
/* const tourist = ['Paris', 'London', 'New York', 'Tokyo', 'Sydney'];
console.log(tourist);
tourist.push('Dubai');
tourist.push('Bangalore');
console.log(tourist);
tourist.pop();
console.log(tourist);
*/
/* 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/
// solve : ---
const books = ['javaScript', 'C++', 'Java', 'Python', 'C#'];
console.log(books.includes('javaScript'));

/* 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/
// solve : ---
/*5. Combining Arrays
Instructions:
Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const combinedArray = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(combinedArray);
