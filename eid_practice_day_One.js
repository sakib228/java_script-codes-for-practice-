//  custom and method max number finding --- >
/* const arr = [2, 9, 7, 5, 7, 89, 94, 25, 88, 24];
let i = 0;
let max = arr[0];
for (; i <= arr.length; i++){
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);

const arr1 = [2, 9, 7, 5, 7, 89, 94, 25, 88, 24];
const res = Math.max(...arr1);
console.log(res);
*/
/* ternary operator using find even and odd number --- >
// even number and odd number print --- >
// for (let i = 0; i <= 50; i++){
//   if (i % 2 === 0) {
//     console.log("even number", i);
//   } else {
//     console.log("odd number", i);
//   }
// }
 */
/* this is check for toFixed(2) method
let str = '25.5548578';
let num = parseFloat(str);
let res = parseFloat(num.toFixed(2)); // toFixed(2) is used to round the number to 2 decimal places
console.log(res);
console.log(typeof res);

// console.log(num);
// console.log(typeof num);
*/
/*let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(n + ' x ' + i + ' = ' + n * i);
}
  */
/* for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
*/
/* for (let i = 1; i <= 50; i++) {
  if (i === 30) {
    continue;
  }
  console.log(i);
}
*/
/* 30. array theKe first and last element ber koRa --- >
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
arr.shift( arr.pop());
console.log(arr);
*/
/* 32. array থেক even number output ber koRa --- >
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = [];
for (i = 0; i < arr.length; i++){
  if (arr[i] % 2 === 0) {
    res.push(arr[i]);
    }
    }
    console.log(res);
    */
   /* 33. array এর under largest number ber koRa ---
   let arr = [1, 2, 3, 33,4, 5, 6, 7, 8, 9, 10];
   // let resArr = Math.max(...arr); // shortest way to solve this problem
   let max = arr[0];
   for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      }
      }
      console.log(max);
      */ // 34. array reverse ber koRa --- >
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.reverse();
// console.log(res);

// 35. array sort ber koRa --- >
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.sort((a, b) => a - b);
// console.log(arr);

// 36. array থেক duplicate remove do it ber koRa --- >
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(res);

// custom method --- >
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = []; // insert the not duplicate element in res array
let duplicate = false; // first i can say there are no duplicate element in array
for (let i = 0; i < arr.length; i++){
  if (res.includes(arr[i])) {
    duplicate = true;
    break;
  }
  res.push(arr[i]);
}
console.log(res);
