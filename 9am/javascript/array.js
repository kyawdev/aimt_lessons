// const arr = new Array("apple", "banana", true, false, null, undefined);
// console.log(arr.length);
//array destructuring
// const arr = [22, 33, 44, 555];
// const arr2 = ["aa", "bb", "cc", 22, 33];
// const arr3 = [arr, arr2];
// const arr4 = [...arr, ...arr2];
// console.log(arr3);
// console.log(arr4);
// const [one, two, ...three] = arr2;
// console.log(one);
// console.log(three);

// arr2[0] = "apple";
// arr2[5] = "banana";
// console.log(arr2);
// console.log(arr2[3]);

// const a = new Array("appple", 20, true, "orange", null)
// console.log(a[0]);
// const b = ["aa", "bb", 22, 33, 44, true, 22.2];

// console.log(Array.isArray(b));
// console.log(b.indexOf(true));
// b.push("abc");
// b.unshift("apple");
// b.pop();
// b.shift();
// console.log(b.splice(0,2));
// console.log(b);
// console.log(b.splice(5, 1));
// console.log(b);
// const number = [1, 2, 3, 4, 5, 6]
// const [a, b, ...c] = number;
// console.log(a);
// console.log(c);
// const arr = ["aaa","banana","pine-apple","water-melon"];
// const aa = arr.join(",");
// console.log(aa);
// const arr = [
//     ["apple","banana","mango","orange",["aa","bb","v"]],
//     ["mgmg","aungaung","mama","koko"],
//     [22,33,55,66],
// ]

// console.log(arr[0][4][0]);
// const arr = ["aaa", "banana", "pine-apple", "water-melon","koko","nono"];
// arr.splice(1,4);
// console.log(arr);
// const app1 = [22, 33, 44];
// const app2 = ["aa", "bb", "cc"];

// const app3 = [...app1, ...app2];
// const app4 = [app1, app2];
// console.log(app4);
// console.log(app3);
// destructure
// const app = [22, 33, 44,33,55,66];
// const [a, b, ...c] = app;
// console.log(c);



const arr = [
    [22, 33, 44, 55, ["aa", "bb", "cc"]],
    [31, ["apple", "banana", "pine-apple"], "james", "nono"],
    [1, 3, 4, 5, ["a", "v", "n"]]
];
console.log(arr[1][1][2]);