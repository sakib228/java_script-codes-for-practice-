const text =[1,2,3,4,5,6,7,8,9,10];
// console.log(text);
// text.reverse();
// console.log(text);

// const text1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = text1.length - 1; i >= 0; i--) {
//   console.log(text1[i]);
// }

const revText =[];
for(let text1 of text){
  revText.unshift(text1);
}
console.log(revText);
