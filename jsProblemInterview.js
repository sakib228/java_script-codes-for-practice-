// level : 1 - find prime number
/*
let number = 18;
let isPrime = true;// check if number is prime
if (number <= 1) {
  return false;   // if number is less than or equal to 1 then it is not prime
}
else {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      // if number is divisible by any number from 2 to number / 2 then it is not prime
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log("Prime number :", number);
}
else {
  console.log("Not prime number :", number);
}
*/
// another way to solve the problem - prime number 
/*
let num = 18;
let isPrimeNumber = true;
if (num <= 2) {
  return false;
}
else {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) { // check if number is divisible by any number from 2 to number / 2
      isPrimeNumber = false;
      break;
    }
  }
}

console.log(" Result : ", isPrimeNumber ? "prime" : "not prime"); // check if number is prime or not (ternary operator)
*/
// level 2 - solve Palindrome - - - - - - - 1st way
/*
let num = 31415;
let numberStr = num.toString();
// console.log(typeof numberStr);
let reversedNumberStr = numberStr.split("").reverse().join("");
// console.log(reversedNumberStr);
if (numberStr === reversedNumberStr) {
  console.log("Palindrome");
}
else {
  console.log("Not a palindrome");
}
  */
// - - solve palindrome- - - 2nd wat to solve
/*
let str = "maDam";
let caseStr = str.toLowerCase();
let reverseStr = caseStr.split("").reverse().join("");
if (caseStr === reverseStr) {
  console.log("Palindrome");
}
else {
  console.log("Not a palindrome");
}
*/
