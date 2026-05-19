/* Task 1
Simple function Related Practice Tasks
Task-1
Take four parameters. Multiply the four numbers and then return the result





Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/
/*Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */
const result = function (X) {
  if (X % 2 === 0) {
    return (X * 2);
  }
    else {
      return (X / 2);
    }
}
const res = result(3);
console.log(res);


// solve 3 :
// /* Task-3
// Write a function called make_avg() which will take an array of integers and the size
//  of that array and return the average of those values. */
// make_avg = function (arr, size) {
//   let sum = 0;
//   for (let i = 0; i < size; i++) {
//     sum += arr[i];
//   }
//   return sum / size;
// };
// console.log(make_avg([1, 2, 3, 4, 5], 5));
