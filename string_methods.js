// for length method ------string---
// let count = 0;
// const arr1 = "i love bangladesh , that's why i well by and tour some place ";
// for(i = 0 ; i < arr1.length ; i++){
//      let res = arr1[i];
//     if(res.toLowerCase() == "i"){
//         count++;
//     }
// }
// console.log(count);
// object related method

let car = {
    model : "bmw",
    car_plate : 4499,
    owner : "sakib",
    list:["hello","world"],
    car1:{
        name: "sami",
        car : "bmw",
    }
}
console.log(car);
console.log(car.car1["name"]);
for(let keys in car){
    console.log(keys);
}
for(let values in car){
    console.log(values);
}
let res = Object.keys(car);
// let res1 = Object.values(car);

