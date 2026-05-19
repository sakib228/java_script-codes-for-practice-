// // normal function ---
// function add(a, b) {
//     const sum = a + b;
//     return sum;
// }
// console.log("sum : ", add(2, 5));

// // const variable function --- callBack function

// const sub = function (a, b) {
//     const suB = a - b;
//     return suB;
// }
// console.log("sub : ", sub(7, 2));

// // function arrow - > this is es6 shortest version ---

// // 1 line function---
// const mul = (a, b) => a + b; // 2 parameter () 1- parameter optional ()
// console.log(mul(2, 4));

// const div = x => x * x;
// console.log(div(4));

// multiline ---

// const div2 = (a, b, c, d) => {
//     const sum = a + b + c + d;
//     const mul = a * b * c * d;
//     return { sum, mul}
// }
// console.log(div2(3, 2, 5, 2));

// const obj = {
//   name: "Sakin",
//   normal: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// };

// obj.normal(); // Sakin
// obj.arrow();  // undefined 😵
