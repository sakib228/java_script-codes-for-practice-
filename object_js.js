let file1 = {
    name:'sakIb',
    id : 3228,
    company : 'teCHland' ,
    salary : 30000,
    hero : function(){
       this. name1 = "raKib", // this value is not a object property  so,we this value is global - naw cuRRect way is this. use
        this . id1 =322; // this value is not an object property  so,we this value is global - naw cuRRect way is this. use
    }
}
// console.log(file1);
// console.log(file1.name);
// console.log(file1.id);
// console.log(file1['company']);
// console.log(file1['salary'])
// file1.hero();
// console.log(file1.name1);
// console.log(file1.id1);
for(let hi in file1){
    console.log(hi);
}
file1["name"] = "saKib hoSSain";
file1["salary"] = 5000;
// file1.location = "14 num road";
// file1.experience = "javascript";
file1["address"] = "14 num road";
file1["experience"] = " javascript";
// file1.name ="sheikh saKib";
// file1.salary=4000000;
console.log(file1);
