// function finalScore(omr) {
//   let sum = omr.right + omr.wrong + omr.skip;
//   if (sum !== 100) {
//     return "Invalid";
//   }
//     let res = (omr.right * 1 + omr.wrong * (-0.5) + omr.skip*0);
//   return res;
// }
// --------------------------------
// const object11 = {
//   right: 30,
//   wrong: 30,
//   skip: 40,
// };
// console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
// -----------------------------------
// this is another q task 4

// function gonoVote(array) {
//   let count = array.length;
//   console.log(count);
//   if (!Array.isArray(array)) {
//     return "Invalid";
//   }
//   let arrHa = [];
//   for (let level of array) {
//     if (level === "ha") {
//       arrHa.push(level);
//     }
//   }
//   console.log(arrHa);
//   let arrNa = [];
//   for (let level of array) {
//     if (level === "na") {
//       arrNa.push(level);

//     }
//   }
//   console.log(arrNa);
//   if (arrHa.length === arrNa.length) {
//     return "equal";
//   } else if (arrHa.length > arrNa.length) {
//     return true;
//   } else if (arrHa.length < arrNa.length) {
//     return false;
//   }
// }
// const vote1 = ["ha", "ha", "na", "ha", "ha", "na", "na", "ha", "na"];
// const vote2 = ["ha", "ha", "na", "ha", "ha", "na", "na", "ha", "na"];
// const vote3 = ["ha", "na", "na", "na", "na", "na", "na", "ha", "na"];
// const vote4 = "hello how are you";
// const result = gonoVote(vote1, vote2, vote3, vote4);
// function analyzeText(text) {
//   // Step 1: Input validation
//   if (typeof text !== "string" || text.trim().length === 0) {
//     return "Invalid";
//   }
// ----------------------------------
//   // Step 2: Words array
//   let words = text.split(" ");
//   let longWord = words[0];

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longWord.length) {
//       longWord = words[i];
//     }
//   }
// -------------------------------------
//   // Step 3: Count characters excluding spaces
//   let charCount = text.split(" ").join("").length;

//   // Step 4: Return object
//   return {
//     longwords: longWord,
//     token: charCount,
//   };
// }
// console.log(analyzeText("I am a little honest person"));
// // {"longwords":"little","token":22}

// console.log(analyzeText("Hello world"));
// // {"longwords":"Hello","token":10}

// console.log(analyzeText("Keep coding keep shining"));
// // {"longwords":"shining","token":21}

// console.log(analyzeText(12345));
// // "Invalid"

// console.log(analyzeText("Programming is fun"));
// // {"longwords":"Programming","token":16}

// console.log(analyzeText("A quick brown fox"));
// // {"longwords":"quick","token":14}

// console.log(analyzeText(""));
// // "Invalid"
