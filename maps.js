const details = new Map(
  [['banana', 300],
  ['mango', 700],
  ['apple', 400],]
);
// get methods gives us the value of the key we want to access
details.set('banana', 200);
console.log(details.get('banana'));
console.log(details.get('mango'));
console.log(details.get('apple'));

console.log(typeof details);
