// const a = 10;
// const b = 20;
// if (a === 10 || b < 16) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// if (a === 10 && b < 16) {
//     console.log("true");
// } else {
//     console.log("false");
// }
// if (a === 10) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// const age = 20;
// const name = age >= 20 ? "john" : "rose"; // > =
// const name2 = age > 20 ? "john" : "rose";
// console.log(name);
// console.log(name2);

// const a = "20";
// if (a === 10) {
//     console.log("a is "+a);
// } else if (a === 20) {
//     console.log("a is " +a);
// }else if (a === "20") {
//     console.log("a is " +a);
// }else {
//     console.log("a is null");
// }

// const a = !!true;
// const b = !true;
// console.log(a);
// console.log(b);

// if (0) {
//     console.log("a");
// } else {
//     console.log("b");
// }
// if (false) {
//     console.log("a");
// } else {
//     console.log("b");
// }
// if (undefined) {
//     console.log("a");
// } else {
//     console.log("b");
// }

// if (null) {
//     console.log("a");
// } else {
//     console.log("b");
// }

// if (NaN) {
//     console.log("a");
// } else {
//     console.log("b");
// }
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// for (let i = 0; i <= users.length; i++) {
//     const element = users[i]
//     console.log(element);
// }
// const users = [
//     "koko","mgmg","aungaung","bobo","nono"
// ]
// let i = 0;
// do {
//     console.log(`the loop ans is ${users[i]}`);
//         i++;
// } while (i < users.length);


// let i = 0;
// while (i < users.length) {
//     console.log("my name is " + users[i]);
//     i++;
// }
// const date = new Date();
// console.log(date);
// let date1 = new Date().toLocaleString();
// let date2 = new Date().toLocaleTimeString();
// let date3 = new Date().toLocaleDateString();
// console.log(date1)
// console.log(date2)
// console.log(date3)

const d = new Date().getDay();

switch (d) {
    case 0:
        console.log('Sunday');    
        break;
    case 1:
    console.log('monday');    
        break;
    case 2:
    console.log('tuesday');    
        break;
    case 3:
    console.log('wednesday');    
        break;
    case 4:
    console.log('thursday');    
        break;
    case 5:
    console.log('friday');    
        break;
    case 6:
    console.log('saturaday');    
    break;

    default:
        console.log("something wrong");
        break;
}