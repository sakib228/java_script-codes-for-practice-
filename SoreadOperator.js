// let arr = [1, 2, 3, 4,];
// let arr1 = [...arr, 5, 6, 7,]; // spread operator
// console.log(arr1);

// function sum(x, y, z, ...args) { // rest operator
//   console.log(y, z, args);
//     return x + y + z + args.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4, 5))

let obj = { name: 'SakIb' };

let json = JSON.stringify(obj);
console.log(json);

let back = JSON.parse(json);
console.log(back);
