// // step 1 : to find the property ---
const obj = {
    name: "SaKib Ahmed",
    age: 25,
    gender: "Male",
    address: "Dhaka",
    hobbies: ["Reading", "Coding", "Watching Movies"],
    skills: ["Javascript", "HTML", "CSS", "PHP"],
    languages: ["English", "Urdu", "Bengali"],
}
// const pro = Object.keys(obj);
// const res = pro.includes("hobby");
// console.log(res);
// console.log(pro);
// //step 2 : another way to check if the property exists in the object () if
// if ('skills' in obj) {
//   console.log('skills exists');
// } else {
//   console.log('skills does not exist');
// }
// step 3 : to find the property
// if(obj.hasOwnProperty('languages')) {
//     console.log('languages exists');
// } else {   console.log('languages does not exist');
// }
// const enter = Object.entries(obj); // key and value both are in array format
// console.log(enter);
// for (const key in obj) {
//   console.log(key," - ", obj[key]);
// }
// const res = Object.keys(obj);
// console.log(res);
// for (const key of res) {
//   console.log(key," - ", obj[key]);
// }
// number of object properties
const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
  e: 50,
}
const num = Object.keys(numbers);
let sum = 0;
for (let add of num) {
sum += numbers[add];
}
console.log(num);
console.log(sum);
