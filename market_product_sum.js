//  without product quantity - give the sum
/*
function cord(product){
    let total = 0;
    for(let costs of product){
        total = total + costs.price;
    }
     return total;
}
const arr = [ {name:'shirt', price: 500},
    {name:'pant', price:800},
    {name: 'jennies', price:900},
    {name: 'huddi', price:1200}
]
const result = cord(arr);
console.log("the product is :",result );
*/
// with the quantity
/*
function card(product) {
  let sum = 0;
  for (let products of product) {
    const productValue = products.price * products.quantity;
    sum = sum + productValue;
  }
  return sum;
}
const arr = [
  { name: "facewash", price: 400, quantity: 3 },
  { name: "facecream", price: 600, quantity: 6 },
  { name: "bodyloshon", price: 800, quantity: 1 },
  { name: "hair", price: 2000, quantity: 3 },
];
const priceCost = card(arr);
console.log("total price in this product :", priceCost);
*/
// discount method  noDiscount = 100 midDiscount = 60 highDiscount=30
/*
function discount(quantity){
        if (quantity <= 100) {
          const price = quantity * 100;
          return price;
        } else if (quantity <= 199) {
          const price = quantity * 60;
          return price;
        } else {
          const price = quantity * 30;
          return price;
        }
}
const list = discount(200);
console.log("total price odf the product :",list);
*/
// now make it responsive discount
/*
 discount(quantity){
    const lowDiscount = 100;
    const midDiscount = 60;
    const highDiscount = 30;
    if (quantity <= 100){
        let res = quantity * lowDiscount;
        return res;
    }
    else if(quantity <= 200){
        let res = 100 * lowDiscount;
        let res1 = quantity - 100 ;
        let resQ = res1 * midDiscount ;
        const finalResult = res + resQ ;
        return finalResult;
    }
    else{
        let res = 100 * lowDiscount;
        let resMid = 100 * midDiscount ;
        let res1 = quantity - 200 ;
        let resQ = res1 * highDiscount;
        const finalResult = res + resQ + resMid;
        return finalResult;
    }

}
const user = discount(23);
const user1 = discount(133);
const user2 = discount(233);
console.log("result : ", user,user1,user2);

*/
// student mark
/*
function add(a, b) {
  if (typeof a !== Number) {
    return "check 1st number ?";
  } else if (typeof b !== Number) {
    return "check its a number ?";
  }
  {
    return a + b;
  }
}
function sub(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}
function devi(a, b) {
  return a / b;
}
function operation(a, b, operator) {
  if (operator === add) {
    return add(a, b);
  } else if (operator === sub) {
    return sub(a, b);
  } else if (operator === multi) {
    const res = multi(a, b);
    return res;
  } else if (operator === devi) {
    return devi(a, b).toFixed(2);
  }
}
const input0 = operation(3, "ff", add);
const input1 = operation(5, 2, sub);
const input2 = operation(5, 2, multi);
const input3 = operation(5, 2, devi);
console.log(input0, " ", input1, " ", input2, " ", input3);
*/
/*
function fullname(first, second){
  if(first !== 'String'){
    return "this 1 is not a string";
  }
  else if (second !== 'String') {
    return "this is 2 not a string ";
  }
}
const input = fullname(5,'sakib');
console.log(input);
*/
// for object
/*
function getPrice(product) {
  if (typeof product !== "object") {
    return "please enter an object";
  }
  return product.price;
}
const input = getPrice(33);
console.log(input);
*/

