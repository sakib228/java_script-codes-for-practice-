// // spread operator copy, merge, add --- shallow copy only
// const collection =Math.max(2, 4, 1, 4, 6, 7,8,66,76,55,56);
// console.log(collection);

// const number = [3, 1, 3, 4, 5, 8, 7, 55,57,12, 3];
// // naw expand
// console.log(Math.max(...number));

// const num = [2, 3, 4, 11, 54, 6, 44, 8];
// const num2 = [22, 11, 44, 66, 77];
// const num1 = [...num, 66, 88,...num2];
// num1.unshift(44, 22);
// // console.log(num);
// console.log(Math.min(...num1),Math.max(...num1));

// const obj = {
//     name: 'sakib',
//     age: 33,
//     color : 'black'
// }
// const obj1 = {
//     name1: 'vivo',
//     model: ' vivo v27',
//     color1: ' black'
// }
//  obj.name = 'rakib';
// const res = { ...obj, ...obj1, sub:'chemistry' };
// console.log(res);
function collect(...num) { //rest is a collect of values -> as well as like array
    console.log(num);
}
// let coll =(2,1,3) // [3, 2, 1, 7, 8];
collect(3,2,1);
