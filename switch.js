let x = "r";
switch (x) {
    case 0:
        "case is 1";
        break;
    case 1:
        "case is 2";
        break;
    case 2:
        "case is 3";
        break;
    case 4:
      "case is 4";
        break;
    case 5:
       console.log("this is case 5");
        break;
    default:
      console.log("you can not push a number");
}
// ------------------------------
let obj = { name: "sakib", age: 22, color: "black" }
for (let obj1 in obj) {
    console.log(obj1, ":" ,obj[obj1]);
}
console.log(obj);

const arrs = [3, 4, 5, 1, 3, 11, 34, 2];
for (let arr of arrs) {
    console.log(arr);
}
