// Free Drinks --------------------------

const burgerPrice = 500;
if (burgerPrice >= 500) {
  console.log("Your Burger bill : ", burgerPrice, "rewards : Free coke");
} else {
  console.log("Coke : 30 tk");
}

// BMI_Calculators --------- normal if-else -------------
const weight = 60;
const height = 1.9;
const calBml = weight / (height * height);
console.log("Your BMI is : ", calBml.toFixed(3));
if (calBml < 18.5) {
  console.log("Your BMI is : ", calBml.toFixed(3), "Underweight");
} else if (calBml >= 18.5 && calBml <= 24.9) {
  console.log("Your BMI is : ", calBml.toFixed(3), " your weight is normal");
} else if (calBml >= 25 && calBml <= 29.9) {
  console.log("Your BMI is : ", calBml.toFixed(3) < "you are overweight");
} else {
  console.log("Your BMI is : ", calBml.toFixed(3), " your are obese");
}
// nested if else

const weight1 = 60;
const height1 = 1.9;
const calBml1 = weight / (height * height);
console.log("Your BMI is : ", calBml.toFixed(3));
if (calBml1 > 18.5) {
  if (calBml1 <= 25.9) {
    console.log(
      "Your BMI is :",
      calBml1.toFixed(3),
      "- your weight is normal ",
    );
  } else if (calBml1 <= 29.9) {
    console.log("your BMI is : ", calBml1.toFixed(3), "Your weight is over ");
  } else {
    console.log(" you are obese");
  }
} else {
  console.log("your BMI is : ", calBml.toFixed(3), "underweight");
}
//  grade calculator ------------------------
// let score = parseInt(prompt("Enter your score : "));
let score = 87;
if (score >= 90) {
  console.log("A+");
} else if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("B+");
} else if (score >= 50) {
  console.log("D");
} else if (score >= 40) {
  console.log("E");
} else {
  console.log(" your result is not Found");
}
//  again

let myScore1 = 80;
let friendScore = 70;
if (myScore1 >= 80) {
    console.log("i am inside with my friend");
  if (friendScore >= 80) {
    console.log("Your score is : ", friendScore, " lets go for a launch");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Your score is : ", friendScore, " better luck next time");
  } else if (friendScore > 40 && friendScore <60 ) {
    condole.log("your score is : ",friendScore,"thinking  to Block my friend");
  }
  else{
    console.log("block my friend");
  }
}
 else {
  console.log("goto home and sleep");
}

// --------- q5 -------------------

let num1 = 33;
let num2 = 40;
let result;
/*
if(num1 > num2){
    result = num1 * 2 ;
    console.log("result is : ", result);
}
else{
    console.log("result is : ", (num1+num2));
}

*/
num1 > num2 ?console.log("result is : ",(num1*2)):console.log("results is : ",(num1+num2));

// ticket fare  calculator -----------------

let age = 16;
let ticketPrice =800;
if( age <= 10 ){
    console.log(" Free for the children");
} 
else if(age>11 && age<=25){
    console.log("%50 discount for the student ", (800*(50/100)));
     console.log("payment : ", (800 - 800 * (50 / 100)));
}
else if(age>40 && age<=70){
    console.log("15% discount for the oldest persons : ", (800*(15/100)));
    console.log("payment : ", (800-(800*(15/100))));
}
else{
    console.log("otherwise ticket price is 800 tk")
}
