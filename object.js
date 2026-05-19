// for an object write 
const objects={
    name1 : "skaib",
    name2 : "hossain",
    age : 22 ,
    fav_color : "black",
    details:function(){
        // console.log(this.name1 + " " + this.name2);
        this.details1();
        return this.name1 + " " + this.name2;
       /* why to use this , because this function is under an object ,
       so, we can  not repeat object name all time , that why to used this 
       operator */
    },
    details1:function(){
        console.log("hello world");
    }
}
// console.log(objects.age);
// console.log(objects.name);
console.log(objects["name1"]);
console.log(objects["age"]); /* for string */
// console.log(objects.name2);
console.log(objects.details()) ; /* 8output dekhar jonno to lagbe ? console.log(); */
// objects.details();

/* 
let x = 6;
console.log(typeof x); 
*/
let x = new Number(6);
console.log(typeof x );
// for an object 
