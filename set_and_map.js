// set methods -----------------------
const fruits = new Set(['mango', 'banana', 'apple', 'orange', 'watermelon']); // for normal apply
console.log(fruits);
fruits.add('guava');
console.log(fruits);
const Fruit = new Set([]); // we can add-its work like push method
Fruit.add('guava');
Fruit.add('apple');
Fruit.add('banana');
console.log(Fruit);
// use function for set
let enter = "";
for (let fru of fruits.entries()) {
    enter += fru;
}
console.log(enter);

// map related methods --------------------- // key-value pair , normal console
const details = new Map([
    ['Dhaka', 600],
    ['khulna', 900],
    ['new_work', 79798],
]);
console.log(details);
console.log(typeof details,"\n");
const detail = new Map([]);    // push method use
detail.set('dhaka11', 400);
detail.set('dhaka12', 550);
console.log(detail);
let adding = " ";
for (let add of details.entries()) {
    adding += add;
}
console.log(adding);
