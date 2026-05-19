let text = `hello, how are you ,and what are  you doing in `; /* string literal  ( ` ) */
console.log(text);

// string search  ------------------------------------

let fruit = " banana, apple , orange";
// slice ------
console.log(fruit.slice(1,7)); /* .slice(start, end); slice means = cut ; */
console.log(fruit.slice(-11)); /* .slice(start, end); slice means = cut ; */
console.log(fruit.slice(7)); /* .slice(start, end); slice means = cut ; */
// substring ------as well as the same to same the slice 
console.log(fruit.substring(6,13));

// UpperCase and LowerCase ------------ touppercase and to lowercase are function ()

console.log(" Text : ", text.toUpperCase());
console.log(" Text : ", text.toLocaleLowerCase());

// trim --- extra space will be removed ----- inside space can not be removed 
let text1 = "      hello world      ";
let res = text1.trim();
let res1 = text1.trimStart();
let res2 = text1.trim();
console.log(res);
console.log(res1);
console.log(res2);

// split make an array , it means it convert a string to array 

let text4 =" hello, can i come to you ";
let res3 = text4.split(" ");
console.log(res3);

// string search ------------

let str = "please locate here , and come to me to help";
let result = str.indexOf("and");
console.log("position : ", result, " position");

// replace -------
let name1 = 'hello, sakib';
let newtext = name1.replace('sakib','munjarin');
console.log(newtext);
// repeat 
let rep = 'sakib';
console.log(rep.repeat(6));

// template litarel -- interpulation 

let tem = `i am the devil of `;
let tem1 = ` ${tem} my world and i have ${3+7}`;
console.log("results word : ", tem1);

