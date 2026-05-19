// dot and bracket notation --- >
// 1. Optional chain reaction --- > most important --- > the sign is ( ? ) 👌
const obj = {
    name: 'sakiB',
    age: 22,
    salary: 30000,
    details: {
        name: 'hoSSain',
        age: 24,
        salaryDetails: 39999,
        }
    }

// console.log(obj["details"]?.["MoreDetails"]?.["salary"]);

for (let object in obj) {
    const value = obj[object]
    console.log(object,value);
}
