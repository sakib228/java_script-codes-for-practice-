const details = {
  name1: "vivo",
  model: "v27",
  color: "black",
};
// const key = Object.keys(details);
// const vLUE = Object.values(details);
// console.log(key);
// console.log(vLUE);
// entires --- >
// const value = Object.entries(details);
// delete details.name1;
// delete details.color
// console.log(details); // array of array object  // array of key value pair --- >
// Object.freeze(details);  Freeze Method no, update, no delete and no add 👌
// Object.seal(details); Seal just update but ( no add and no delete)👌
details.name1 = "saki";
delete details.name1;
console.log(details);
