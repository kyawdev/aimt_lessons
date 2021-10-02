
/*
function hello(name = "james", age = 22) {
    return `my name is ${name} and age is ${age}`;
}
console.log(hello("bobo", 30));

function hello(name, age) {
    return `my name is ${name} and age is ${age}`;
}
console.log(hello("bobo", 30));




function hi(name) {
    // return "hi";
    console.log(`hi ${name}`);
}
// hi('rose'); */
// single line comment
/* multiline comment */
/*
const hi = _ => "hi buddy";
// const hi = () => "hi buddy";
console.log(hi());

const hello = function (name) {
    // return "hello " + name + " how r u?"; 
    return `hello ${name} how r u?`;
}
console.log(hello('james'));*/
/*
function Person(name, age, dob) {
    // console.log(this);
    this.name = name;
    this.age = age;
    this.dob = new Date(dob);
    // this.getName = () => {
    //     return `Mr. ${this.name}`
    // };
    this.getFullYear = () => {
        return this.dob.getFullYear();
    }
}
Person.prototype.getName = function () {
    //arrow function not woking
    return `Mr. ${this.name}`
}
const p1 = new Person('john', 20, '1990-01-01');
const p2 = new Person('rose', 30, '1998-01-01');
const p3 = new Person('willim', 40, '1994-01-01');
const p4 = new Person('smith', 25, '1999-01-01');
console.log(p1.name);
console.log(p1.age);
console.log(p1.dob);
console.log(p1.getFullYear());
console.log(p1.getName());
console.log(p2.name);
console.log(p2.age);
console.log(p2.dob);
console.log(p2.getFullYear());
console.log(p2.getName());
*/
/*
class Car {
    constructor(name, speed, model) {
        this.name = name;
        this.model = model;
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
    getName() {
        return this.name;
    }
    getModel() {
        return this.model;
    }
}
const car1 = new Car("audi", 200, "2020")
const car2 = new Car("toyota", 180, "2021")
const car3 = new Car("honda", 200, "2009")

class Factory extends Car {
    constructor(name, speed, model, factory) {
        super(name, speed, model)
        this.factory = factory;
    }
    getFactory() {
        // console.log(this);
        return this.factory;
    }
}
const c1 = new Factory('audi', 200, '2021', 'China')
const c2 = new Factory('Toyota', 200, '2020', 'Japan')
const c3 = new Factory('Honda', 200, '2021', 'Thailand')
console.log(c1.getModel());
console.log(c1.getSpeed());
console.log(c1.getFactory()); */


// console.log(car1.getModel());
// console.log(car1.getName());
// console.log(car1.getSpeed());
// console.log(car1.name);

// JavaScript Functions are First-Class Citizens

// const sum = (a, b) => a + b;
// const average = (a, b, fn) => fn(a, b) / 2;
// console.log(average(10, 20, sum));

function myFun() {
    return arguments;
}
console.log(myFun(22, 33, 44, "james"));