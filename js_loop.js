// for loop er koi ekta variant ace like for of ata beshi use kora hoi array - best practice
// array er ekta section ace jeta use kora hoi object a - for ... in

/*// -----------------------------------------------
// for . . . of array
let fruits =['mango','apple','coconut','banana'];
for( let fruit of fruits){
    console.log("here : ", fruit);
}
// for . . . in for use object
let numbers = {name:'sakib', age:23, color:'black'};
for(let number in numbers){
    console.log(number,numbers[number]);
}
// ----------------------------------------------
let arr =[4,3,2,5,6,7,8,3,4,5,5,66,7,77,88];
for(let i=0; i <= arr.length; i++){
    console.log("value : ",arr);
}
// ------------------------------------------------*/
/*let num = 0;
while(num <= 30){
    if(num == 11){
        continue;
    }
    console.log(num);
    num++;
}
    */
//    --------------------------------------------
let n = 0;
while (n < 30) {
  n++;
  if (n % 5 !== 0) {
    continue;
  }

  console.log(n);
}
