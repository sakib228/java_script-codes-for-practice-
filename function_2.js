// function add(numbers){
//     const evens = [];
//     const odd = [];
//     for(let num of numbers){
//         if( num % 2 === 0){
//             // console.log(num);
//             evens.push(num);
//         }
//         else{
//             // console.log(num);
//             odd.push(num);
//         }
//     }
//      return {evens,odd};

// }
// let x =[2,4,5,11,2,6,7,8,9,10];
// const result = add(x);
// console.log("the array elements are : ", result.evens);
// console.log("the array elements are : ", result.odd);
// -----------------------------------------------------------------
function add(number){
   let sum = 0;
    for(let num of number){
     sum = sum + num
    }
  return sum;
}
const x = [4 ,1,4,5,6,7,22,1,11,4];
const num = add(x);
console.log("the result is : ", num);

