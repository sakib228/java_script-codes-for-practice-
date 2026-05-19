const person = {
  firstName: "sheIkh",
  lastName: "saKib",
  get fullname() {
    return this.firstName + " " + this.lastName;
  }
};

// console.log(person);
console.log(person.fullname);

const person2 = {
  firstName: "sheIkh",
  lastName: "saKib",
  language : " ",
  set lang(lan) {
    person2.language = lan;
  }
};

person2.lang = "JavaScript";
// console.log(person2.language);
console.log(person2);
