// array finding for minimum number
/*
function miniMum(elements) {
  let mini = elements[0];
  for (let min of elements) {
    if (min < mini) {
      mini = min;
    }
  }
  return mini;
}
function maxiMum(elements){
     let max = elements[0];
     for(let maxi of elements){
        if(maxi > max ){
            max = maxi;
        }
     }
     return max;
}

const arr = [33, 27, 7, 3, 43, 16, 41, 52, 63, 77, 8, 55, 76, 32];
const result = miniMum(arr);
const result1 = maxiMum(arr)
console.log("minimum number is : ", result,"\nMaximum number is : ",result1);
*/
// add and multiplication on wood to make table chair and bed
/*
function wood(table_num,chair_num,bed_num){
    const woodQuantity_table = 10 ;
    const woodQuantity_chair = 3 ;
    const woodQuantity_bed = 50;
    const res =(woodQuantity_table*table_num) + (woodQuantity_chair * chair_num) + (woodQuantity_bed * bed_num);
    return res;
}
const resultB = wood(0,0,1);
const resultT = wood(0,3,2);
const resultC = wood(1,0,2);
console.log("the bed cost is :", resultB,"\nthe table cost is :", resultT,"\nthe chair cost is :",resultC);
*/
// sealing for shirt and there ...
/*
function shirt(shirt1,shirt2,shirt3){
    const shirt11 = 500;
    const shirt22 = 300;
    const shirt33 = 900;
    const res1 = ( shirt11 * shirt1);
    const res2 = ( shirt22 * shirt2);
    const res3 = ( shirt33 * shirt3);
    const result = res1 + res2 + res3 ;
    return result;
}
const shirt1 = shirt(1,0,0);
const shirt2 = shirt(0,3,0);
const shirt3 = shirt(0,0,4);
console.log("shirt 1 price is :", shirt1,"\n shirt 2 price is : ",shirt2,"\n shirt 3 price is :",shirt3);
*/
// object related ,maximum price phone
function phone(price) {
  let maxPrice = price[0];
  for (let cost of price) {
    if (cost.price < maxPrice.price) {
    maxPrice = cost};
  }
  return maxPrice ;
}

function phones(price){
  let minPrice = arr[0];
  for(cost of price){
    if(minPrice > cost){
      minPrice = cost;
    }
  }
  return minPrice;
}

const arr = [
  { name: "iphone", price: 100000, model: 2223, proser: "i chip" },
  { name: "vivo", price: 80000, model: 2224, proser: "dimensity" },
  { name: "redmi", price: 60000, model: 2223, proser: "snapdragon" },
  { name: "oppo", price: 30000, model: 4223, proser: "snapdragon" },
];
const result = phone(arr);
const result1 = phones(arr);
console.log("the best phone price in 2025 : ", result);
console.log("the best phone price in 2025 : ", result1);
