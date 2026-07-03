// function closure
function Closure() {
  let c = 5;
  return function () { //closure
    if (c > 0) {
      c--;
      console.log(c);
      return Closure();

    }
  }
}
let x = Closure();
x();

