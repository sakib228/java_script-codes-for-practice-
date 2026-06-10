let result = 71;
while (true) {
  if (result == 90) {
    console.log("Your Grade is : A+");
    break;
  }
  else if (result >= 80 && result < 90) {
    console.log("Your Grade is : A");
    break;
  }
  else if (result >= 70 && result < 80) {
    console.log("Your Grade is : B");
    break;
  }
  else if (result >= 60 && result < 70) {
    console.log("Your Grade is : C");
    break;
  }
  else if (result >= 50 && result < 60) {
    console.log("Your Grade is : D");
    break;
  }
  else {
    console.log("Your Grade is : F");
    break;
  }
  result++;
}
