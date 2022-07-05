function ageCalc(age) {
    return `Em ${age} anos, ${this.firstName} terá ${this.age + age}`;
};

const person1 = {
    firstName: "Maria",
    age: 30
};

const person2 = {
    firstName: "Luiz",
    age: 20
};

const animal1 = {
    firstName: "Bob",
    age: 2
};

console.log(ageCalc.apply(animal1, [5]));