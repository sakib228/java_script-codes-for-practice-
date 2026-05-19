// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10 (change হয় নাই)


// let obj1 = { name: "SaKin" };
// let obj2 = obj1;

// obj2.name = "HoSSain";

// console.log(obj1.name); // hosSain


let a = 10;

function test() {
  let a = 20;
  console.log(a); // 20
}

test();
console.log(a); // 10
