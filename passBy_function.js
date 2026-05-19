// there are two function to set value
// 1 .pass  by value and --- >
// 2 . pass by reference  --- >


// function add(a, b) {
//     let first = 3;
//     let second = 5;
//     const res1 = (first + second);
//     return res1;
// }

// let a = 6, b = 9;
// console.log("after :", a, b);
// const result1 = add(a, b);

// console.log("before :", result1);
// console.log("before :", a,b);


// function arr(arr1, arr2) {
//     arr1[0] = 100, arr2[0] = 200;
//    let result = arr1[0] + arr2[0];
//     return result;
// }
// let x = [3,2,1], y = [9,8,7];
// console.log("after value is : ", x, y);
// const res = arr(x, y);
// console.log("before value is : ", res);
// console.log("before value is : ", x,y);
// console.log("before value is : ", res);


// ------------------>

function name(x) {
    x.name = 'hoSSain'
}
let user = {
    name: 'sakIb',
}
name(user);

console.log(user.name);

