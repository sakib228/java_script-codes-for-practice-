//  console.log("Practice all the things!"); ---

// arrow function and forEach method --- >

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(num => console.log(num * 2));

// const arr1 = (n) => (n * n);
// console.log(arr1(5))

// map codes ---

// const maps = [1, 2, 3, 4, 5];
// // maps.map(num => console.log(num * 2));

// maps.map((value, index, array) => {
//   console.log(value);
//   console.log(index);
//   console.log(array);
// });

const users = [
  { name: 'saKib', age: 22 },
  { name: 'raHim', age: 25 },
  { name: 'kaRim', age: 28 },
];
const user1 = users.map(nam => nam.age);
console.log(user1);
