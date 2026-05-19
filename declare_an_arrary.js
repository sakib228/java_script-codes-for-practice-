// ----------------------------- 1st q in array  ------------------------------------- 

const fruit = ['mango','orange','banana','apple','lichi'];
console.log("The 3rd index is : ", fruit[3]);
fruit[2] = 'jambura';
console.log("The 3rd index is : ", fruit);
// console.log("The 3rd index size : ", fruit.length);

// -------------------------- q2 add and remove the array Elements ---------------------------

const destiNation = ["dhaka","khulna","rajshahi"];
console.log("elements are : ", destiNation);
destiNation.push("bagga"); 
// adding / reject So, use array_name.push/pop 
console.log("elements are : ", destiNation);
destiNation.push("gopalgonj","chittagong");
console.log("elements are : ", destiNation);
destiNation.pop();
console.log("elements are : ", destiNation);

// q3 member ship - includes 

const books = ["c++","chemistry","biology","python","javascript"];
console.log("the value is : ",books.includes("javascript"));
console.log("this is a array : ", Array.isArray(books));
console.log("this is a array : ", books.indexOf("c++","javascript"));

// ---------------------------- q4 checking if its an array  ---------------------------

let array1 = [1,3,2,3,4,6,7,8,9,11];
console.log("this is a array : ", Array.isArray(array1));
let array2 = ["sakib", "maruf","tamim","sami"];
console.log("this is a array ", Array.isArray(array2));
let array3 = [];
console.log("this is a array : ",Array.isArray(array3));
let array4 = ["sakib",3 ,2,4,true];
console.log("this is an array : ", Array.isArray(array4));

// q5 ---------------------- combining array ----------------------------

let array6 =["sakib","rakib","rahim"];
let array7 = [1,3,1];
let array_combine = array6.concat(array7);
console.log(array_combine);

//----------------------------- extra think --------------------------------

let array8 =[3,2,1,5,7,8,6];
console.log("there is array : ", array8);
array8.shift();
console.log("there is array : ", array8);
array8.unshift(3,1,2,6);
console.log("there is array : ", array8);

let apps =[2,5,3,2,1,5,7,9];
apps.join();
console.log("there is an array : ", apps);
