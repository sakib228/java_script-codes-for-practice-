const obj = {
  name: 'SaKib Ahmed',
  age: 35,
  profession: 'Cricketer',
  country: 'Bangladesh',
  details: function () {
    return `${this.name} is a ${this.age} years old ${this.profession} from ${this.country}.`;
  },
};
// console.log(obj.details());
console.dir(obj);
