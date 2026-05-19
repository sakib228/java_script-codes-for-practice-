// const arr = [1, 2, 3, 4, 5, 6];
// // map_ing
// const res = arr.map(n => {return n*2});
// console.log(res);

// const res1 = arr.map(x => x * x);
// console.log(res1);

const details = [
  { name: 'sakIb' },
  { name: 'raKib' },
  { name: 'saHa' },
  { name: 'HoSSain' },
];
// naw to get the names

const names = details.map((x) => x.name);
const names1 = details.map((x) => x.name.toUpperCase());
console.log(names);
console.log(names1);
