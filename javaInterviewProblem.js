// level 1 - solve the problem - sum of numbers
/*
let a = 10;
let b = 20;
let c = a + b;
console.log(c);
*/
// level 2 - solve the problem - even number and odd number
/*
let a = [1, 2, 3, 4, 5];
let even = [];
let odd = [];
for (let i = 0; i < a.length; i++){
  if (a[i] % 2 === 0) {
    even.push(a[i]);
  }
  else {
    odd.push(a[i]);
  }
}

console.log("Even number :",even);
console.log("Odd number :",odd);
*/
// level 3 - solve the problem - largest number
/*
let lar = [4, 1, 7, 3, 5, 9, 12, 33, 21, 22, 24];
let max = lar[0];
for (let i = 0; i < lar.length; i++) {
  if (lar[i] > max) {
    max = lar[i];
  }
}
console.log("Largest number :", max);
*/
// level 4 - solve the problem - Multiplication Table
/*
let m = 5;
for (let i = 0; i <= 10; i++) {
  console.log(m, "x", i, "=", m * i);
}
*/
// level 5 - solve the problem - Factorial
/*
let f = 6;
let factorial = 1;
for (let i = 1; i <= f; i++) {
  factorial = factorial * i;
}
console.log("Factorial of 6 : ",factorial);
*/
// level 6 - solve the problem - Reverse a String
/*
let str = 'hello world'; // string to array - split(" ") and array to string - join("")
console.log(str.split("").reverse().join(" "))
*/
// level 7 - solve the problem - Count Vowels
/*
let vo = "bangladesh is a small country";
let vow = vo.split("");
let vowels = [];
let count = 0;
for (let i = 0; i < vow.length; i++) {
  if (vow[i] === "a" || vow[i] === "e" || vow[i] === "i" || vow[i] === "o" || vow[i] === "u") {
  // let char = vow[i].toLowerCase(); // convert to lower case
    vowels.push(vow[i]);
    count++;
  }
}
console.log("Vowels :", vowels);
console.log("Vowels count :", count);
*/
// level 8 - solve the problem - Remove Duplicate
/*
let duplicate = [1, 2, 3, 4, 4, 4, 6, 5, 6, 7, 3, 4, 5, 6, 7, 8, 9, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let result = [...new Set(duplicate)]; //
console.log("Duplicates :", result);
*/
// - - - - - - - - another wy to solve the problem - Remove Duplicate
/*
let duplicate = [2,3,1,2,3,1,4,5,6,7,5,3,2,1,4];
let carryDuplicate = [];
for(let i = 0; i < duplicate.length; i++){
if (!carryDuplicate.includes(duplicate[i])) // check if duplicate is already in the array
carryDuplicate.push(duplicate[i]);
}
console.log("Duplicates :", carryDuplicate);
*/
// level 9 - solve the problem - FizzBuzz ⭐
/*
let Fizz = [];
let Buzz = [];
let FizzBuzz = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    Fizz.push(i);
  }
  if (i % 5 === 0) {
    Buzz.push(i);
  }
  if (i % 3 === 0 && i % 5 === 0 ) {
   FizzBuzz.push(i);
}
}
console.log("Fizz\n")
console.log(Fizz);
console.log("buzz\n")
console.log(Buzz);
console.log("FizzBuzz\n")
console.log(FizzBuzz);
*/
