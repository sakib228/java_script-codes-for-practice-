// const laptop = {
//     name:"acer",
//     model:254,
//     stroge:"512 ssd",
//     screen : "ips",
//     laptop1 : ["lenevo","acer","apple","hp"],
//     laptop2 :{
//         name:"dell",
//         model:332,
//         stroge:"256 ssd"
//     }
// }
// // ---------------------------- dot notation
// // console.log(laptop);
// console.log(laptop.model);
// // console.log(laptop.screen);
// let names = laptop.name;
// console.log(names);
// laptop.name="hp";
// console.log(laptop);
// ------------------------------ bracket notation

// console.log(laptop["name"]);
// let models = laptop["model"];
// console.log(models);
// laptop["screen"]="amoled";
// console.log(laptop['screen']);
// console.log(laptop);

// console.log(laptop.laptop1);
// console.log(laptop.laptop1);
// console.log(laptop.laptop2["model"]);

// let modelS = laptop.laptop2["model"];
// console.log(modelS);

// laptop1 = ["hp", "acer", "dell"];
// console.log(laptop1);
// let arr = laptop.laptop1;
// console.log(arr);
// let colName = {
//     name : "sakib",
//     color : {
//         colors : "blue",
//         collage:{
//             gpa : 5,
//             collect : ["banana","apple","orange"],
//             gradeNumber : 500 ,
//         }
//     }
// }
// colName.color.collage.gpa = 9;
// colName.color.collage.collect[2] = "papaya";

// console.log(colName["color"]["collage"].gpa);
// console.log(colName["color"]["collage"].collect);
// delete colName.color.collage;
// console.log(colName);

let mobile = {
  brand: "vivo",
  model: 2246,
  ram: " 32 gb",
  display: 6.89,
  price: "510000 tk",
};
// pro style
const keys = Object.keys(mobile);
console.log(keys);
for (let key of keys) {
  console.log(key, ":", mobile[key]);
}

// bangla style
// const keys = Object.keys(mobile);
// console.log(keys); // it will give the style of array
// const values =Object.values(mobile);
// console.log(values);
// console.log(mobile);
