const todos = [
    {
        id: 1,
        job: "go to class",
        isDone: true
    },
    {
        id: 2,
        job: "go to market",
        isDone: true
    },
    {
        id: 3,
        job: "go to gym",
        isDone: false
    }
]
// const done = todos.filter((todo) => {
//     return todo.isDone === true;
// }).map((todo) => {
//     return todo.job
// })
// console.log(done);
// const done = todos.filter(function (todo) {
//     return todo.isDone === true;
// })
// console.log(done);

// const done = todos.filter((todo) => {
//     return todo.isDone === true;
// })

// const done = todos.filter((todo) => todo.isDone === true)

// const job = todos.map(function (todo) {
//     return todo.job;
// })

// const job = todos.map((todo) => {
//     return todo.job
// })
// const job = todos.map((todo) => todo.isDone)
// console.log(job);

// for (let i = 0; i < todos.length; i++) {
//     const element = todos[i].job;
//     console.log(element);
// }
// for (const key in todos) {
//     const element = todos[key].job;
//     console.log(element);    
// }
// for (const todo of todos) {
//     console.log(todo);
//     console.log(todo.job);
// }
// todos.forEach(function (todo) {
//     // console.log(todo);
//     console.log(todo.job);
// });

// foreach,map,filter , reduce



// const done = todos.filter((todo) => {
//     return todo.isDone === true;
// }).map((todo) => {
//     return todo.job
// })
// console.log(done);

const app = [22, 1, 11, 101, 2, 20, 3, 30, 4, 5, 6, 60, 7, 70, 43, 45, 66, 77, 88, 22, 44, 400, 600, 200, 100, 300];
console.log(app.sort((a, b) => a - b));
console.log(app.sort((a, b) => b - a));
// const ans = app.reduce((previousNumber, incerseNumber) =>  previousNumber + incerseNumber)
// console.log(ans);
