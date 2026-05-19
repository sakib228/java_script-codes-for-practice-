const x = 10;

try {
  if (x > 5) throw new Error("x is greater than 5");
  if (x < 5) throw new Error("x is less than 5");
  if (x === 5) throw new Error("x is equal to 5");
}
catch (error) {
  console.log(error.message);
}
// error handling have 2  properties - name and message
finally {
  console.log("This will always run");
}

// ----------- class object oriented programming -----------

