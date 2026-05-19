// inc to feet
/*
function cal(number1){
    let res = number1 / 12 ;
    return res.toFixed(3);
}
const result = cal(66);
console.log("feet calculation result is : ", result);
*/
// inc to feet p - 1
/*
function cal(number){
    let res =parseInt(number / 12);
    let res1 = number % 12;
    console.log(res, "feet", res1, "inch");
}
const result = cal(66);
*/
// leap year founding
/*
function leap(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return (console.log("leap year"));
    }
    else{
        return (console.log("not leap year"));
    }
}
const year1 = leap(2051);
const year2 = leap(2024);
const year3 = leap(2026);
const year4 = leap(2019);
*/
// odd number average
/*function oddAva(number) {
  const numbers = [];
  for (let num of number) {
    if (num % 2 === 1) {
      numbers.push(num);
    }
  }
  console.log("the odd elements is : ", numbers);
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  console.log("The sum number is : ", sum);
  const len = numbers.length;
  console.log("odd array length is : ", len);
  console.log('average is : ',(sum / len));
}
const arr = [3, 1, 2, 33, 4, 55, 6, 77, 8, 99, 10, 5, 44];
const res = oddAva(arr);
*/
// even number average
/*
function evenNum(number){
  const arrIns = [];
  for(let element of number){
    if(element % 2 === 0){
      arrIns.push(element);
    }
  }
  console.log("New even number :", arrIns);
  let sum = 0;
  for(let element of arrIns){
    sum = sum + element;
  }
  console.log("the sum of even numbers : ",sum);
  let len = arrIns.length;
  console.log("length of the even numbers : ",len);
  console.log("Average of even numbers : ", (sum/len).toFixed(2));
}
const arr = [2,4,5,6,1,2,3,33,4,55,6,77,88,9,90,555,3232];
const res = evenNum(arr);
*/
// no duplicate elements are allow
/*
function noDup(arr) {
  const chaR = [];
  for (let element of arr) {
    if (chaR.includes(element) === false) {
      chaR.push(element);
    }
  }
  console.log("the name is : ", chaR);
}
const names = ['sakib','rakib','sami','rahim','rakib','sakib','mimi','boruya','mimi'];
const res = noDup(names);
*/
// some math term to learn
/*
const num1 = Math.max(3, 2, 11, 2, 44, 5, 6, 77, 8, 34, 12);
console.log("the number is : ", num1);
const num2 = Math.min(3, 2, 11, 2, 44, 5, 6, 77, 8, 34, 12);
console.log("the number is : ", num2);
console.log("the number is ; ", Math.round(4.8));
console.log("the number is ; ", Math.round(4.2));
console.log("the random number is : ", Math.random()*20);
*/
// date related problem
/*
const date = new Date();
console.log(date);
const date1 = new Date("2026-10-23");
console.log("\n the date is :", date1);
const date2 = new Date(2026,10,30,20,12,33);
console.log("\n the date is : ", date2);
let d = new Date();
d.getDate();
d.getFullYear();
d.getHours();
d.getMinutes();
d.getTime();
console.log(d.getDate(),d.getFullYear(),d.getHours(),d.getMinutes(),d.getTime());
*/

let today = new Date();
let dateNew = today.getDate();
let monthNew = today.getMonth();
let yearNew = today.getYear();
console.log("today date is :", today);
// console.log(dateNew,monthNew+1,yearNew);
