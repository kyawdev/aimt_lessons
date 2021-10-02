const person = {
    fname: "john",
    lname: "smith",
    age: 22,
    hobby: ['soccer', 'gym', 'cycling'],
    marry: false,
    address: {
        city: "ygn",
        street: "27 street",
        township: "pabedan"
    },
    fullName: function () {
        console.log(this);
        return `${this.fname} ${this.lname}`
    }

};
// console.log(window);
// console.log(this);
console.log(person.fullName());
// console.log(person.fname);
// console.log(person.lname);
// console.log(person.hobby[2]);
// console.log(person.address.city);
// person.email = "john@SpeechGrammarList.com"
// object destructuring
// const { fname, age, address: { city }, color = "red" } = person;
// console.log(person.fname);
// console.log(person.hobby[0]);
// console.log(person.address.city);
// console.log(person);
// console.log(color);
const todos = [
    {
        id: 1,
        job: "go to class",
        isDone : true
    },
     {
        id: 2,
        job: "go to market",
        isDone : true
    },
     {
        id: 3,
        job: "go to gym",
        isDone : false
     }
]

const toJson = JSON.stringify(todos) /* to json */
// console.log(toJson);
const normal = JSON.parse(toJson) /* to object */
// console.log(normal);
// console.log(todos[1].job);

// const a = [22, 3, , 45, 22]
// const b = ["aa", "bb", "cc"]
// console.log([a,b]);
// console.log([...a,...b]);