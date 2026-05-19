// Array related task
// const simple = [222, 11, 2, 44, 56, 7, 88, 9];
// simple[4];
// console.log(simple[4]);
// console.log(simple);
// -----------------------------
// function simple(num) {
//     console.log(num);
//     // console.log(arguments[num]);
// }
// const res = [
//     {name: "jon", age: 22},
//     {name: "raki", age: 24}
// ]
// simple(res);

// console.log(res[0]);
// console.log(res[0],res[1]);
// ---------------------------
// const obj = {
//     name: "saki",
//     age: 22,
//     color: "black",
//     hobby: "coding",
//     list: ['C++', 'java-script', 'python', 'java'],
//     order: {
//         name: "jon due",
//         publish: '10.11.2020',
//         cost: 6000
//     },
//     add: function (a, b) {
//         console.log(a + b);
//     },
//     laptop: 'acer'
// }
// // console.log(obj);
// console.log(obj.name);
// obj.add(2, 3);
// console.log(obj.list);
// console.log(obj.order);
// console.log(obj.order['name'],obj.order['cost']);

// let keys = Object.keys(obj);
// console.log(keys);
// console.log(keys,obj[keys]);
// -----------------------------
//-------- searching -----------------------
function products(arr, search) {
  const reserve = [];
  for (let product of arr) {
    if (product.name.toLowerCase().includes('phone'.toLowerCase())) {
      reserve.push(product);
    }
  }
  return reserve;
}
const arr = [
  { id: 1, name: 'vivo phone', price: 32000 },
  { id: 2, name: 'xi_ami phone', price: 22000 },
  { id: 3, name: 'op_op Phone', price: 12000 },
  { id: 4, name: 'red_mi phone', price: 52000 },
  { id: 5, name: 'real_me Phone', price: 12000 },
  { id: 6, name: 'iphone phone', price: 202000 },
  { id: 7, name: 'nokia phone', price: 3000 },
];
const value = products(arr, 'phone');
console.log(value);
