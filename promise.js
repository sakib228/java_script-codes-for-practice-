let status = true;

console.log("task 1 complete");
// promise definition ---
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve("task 2 complete");
    } else {
      reject("task 2 failed");
    }
  },2000);
});
// promise call ---
promise.then(function (massage) {
  console.log(massage);
}).catch(function (massage) {
  console.log(massage);
});

console.log("task 3 complete");
