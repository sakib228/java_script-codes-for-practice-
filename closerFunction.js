// closer function --- >
// let n = 20;
// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log("outer function", count);
//     }
//       return inner;
// }

// const call = outer();
// call();
// for (let i = 0; i < n; i++){
//     call();
// }

function mother(x) {
  let count = 0;
  function child() {
    // closer function
    count++;
    console.log('this is child function', x, count);
  }
  return child;
}
const child = mother('saKib');
// child();
// console.log(child);
console.log(child());
console.log(child());

const child1 = mother('raKib');
console.log(child1());
console.log(child1());
console.log(child1());

console.log(child());
console.log(child());
console.log(child1());

