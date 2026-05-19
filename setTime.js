// console.log("line 1");

// setTimeout(function(){
//   console.log("line 2");
// }, 2000);

// console.log("line 3");

// callback function ---
let payMentDone = true;
let marks = 90;

function enRoll(callback) {
  console.log("enrolling the student");

  setTimeout(function () {
    if (payMentDone) {
      callback();
    } else {
      console.log("not done yet");
    }
  }, 2000);
}

function progress(callback) {
  console.log("progress");

  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("not done yet");
    }
  }, 3000);
}

function getCertificate() {
  console.log("getting certificate");
  setTimeout(function () {
    console.log("certificate done");
  }, 1000);
}

enRoll(function () {
  progress(getCertificate);
});
