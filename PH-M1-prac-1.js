// const a = isNaN(4);
// console.log(a);
// console.log(typeof a);
// const b = isNaN("abc");
// console.log(b);
// console.log(typeof b);

// problem 1 -----------------------------

let myMoney = 1000;
let orange = 200;
let apples = 350;

let return_money = myMoney - (orange + apples);

console.log( "Total Money :", return_money,"tk");

// problem 2 --------------------------------

let matMarks = 75.25;
let bioMarks = 65;
let cheMarks = 80;
let phyMarks = 35.45;
let banMarks = 99.50;

let result = (75.25 + 65 + 80 + 35.45 + 99.50) / 5 ;
console.log("Total Marks : ", result.toFixed(2));

// problem 3 -----------------------------------------

let num1 = 119;
num1%=5;
console.log("Reminder Number :", num1);

// problem 4 ------------------------------------------

const a = isNaN("11");
//  const b =Number.isNaN("11");
//  console.log(b);
console.log("Results is :", a);
// data type to check 
console.log(typeof "Results is :", a);
const c =isNaN(2-10);
console.log("Check :", c);
console.log(typeof "Check :", c);

/* null is a value  of JavaScript , it is a primitive value  but , when to Check data type- it show 
 it is an object , but is a old bug in js */
 /* isNull is a function of Javascript , if a value is not a number the the Nan(not a number ) function to show the true value */
//  if nan is a number then it show the false 
 
// extra -----------------

// prm ---- 3 
const num11 = isNaN("abc");
console.log(num11);
console.log(typeof num11);

// shop management and discount section 

const price = 9000;
if (price >= 6000) {
  // 45% discount
  let disCount = price * (45 / 100);
  let payMent = price - disCount;
  console.log("You can PayMent :", payMent);
} else if (price >= 4000) {
  // 30% discount
  let disCount = 4000 * (30 / 100);
  let payMent = 4000 - disCount;
  console.log("You can payment : ", payMent);
} else if (price > 2000) {
  // 5% discount
  let disCount = 2000 * (5 / 100);
  let payMent = 2000 - disCount;
  console.log("You can payment : ", payMent);
} else {
  console.log("There are no Discount");
}

