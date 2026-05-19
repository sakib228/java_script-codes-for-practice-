//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }

  if (discount < 0 || discount > 100) {
    console.log("Invalid");
  }

  let discountPrice = (currentPrice * discount) / 100;
  let customerPaid = currentPrice - discountPrice;
  return customerPaid.toFixed(3);
}
// const res1 = newPrice(1500,20);
// const res2 = newPrice(2000,15);
// const res3 = newPrice("1000",10);
// const res4 = newPrice(2000,17.17);
// // const res5 = newPrice(500,"5");
// console.log(res1,res2,res3,res4,);

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }
  const realOtp = "ph-10985";
  if (otp.length === 8 && otp.startsWith("ph")) {
    if (otp === realOtp) {
      return true;
    }
  } else {
    return false;
  }
}
// const res = validOtp("ph-10985");
// const res0 = validOtp("ph-1234");
// const res1 = validOtp("abc-12345");
// const res2 = validOtp(["ph-10985"]);
// const res3 = validOtp(12345678) ;
// console.log(res,res0,res1,res2,res3);

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  let sum = omr.right + omr.wrong + omr.skip;
  if (sum !== 100) {
    return "Invalid";
  }
  let score = Math.round(omr.right * 1 + omr.wrong * -0.5 + omr.skip * 0);
  return score;
}

// console.log(finalScore({right : 30,wrong : 30,skip : 40}));
// console.log(finalScore({right : 67,wrong : 23,skip : 10}));
