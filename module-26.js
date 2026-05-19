// const student = {
//     name: 'saKib',
//     age: 22,
//     color : 'black'
// }
// student.name = 'raKib';
// student['age'] = 40;
// console.log(student)

// function parameter --- >

//1. function name(first, second = "") {
//     const name = first + " " + second;
//     console.log(name);
// }
// name('saKib');
// name("saKib", "hosSain");
// name(`saKib`, `sheikh`);

//2. template literal --- >
// function template(name, model, price) {
//     innerHtml = `
//     <div>
//     <p> this is a ${name} 16 pro</p>
//     <p> this phone model ${model}</p>
//     <span> this phone price is ${price*2} tk </span>
//     </div>)
//     `
//     console.log(innerHtml);
// }
// template('iphone', '16 pro', 20000);

function tag(strings, value) {
  console.log(strings);
  console.log(value);
}

tag(`Hello ${"Sakin","hossain"}`);
