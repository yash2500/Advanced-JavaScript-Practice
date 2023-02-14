// Difference Let, Var and Const
// var => Re-declured the variable and re-assign the value, Global Scope
// let => Re-assign the value, Local Scope
// const => No change, Local Scope

// var a = "Hello"
// var a = "Yash"
// a = "Chhatrala"
// console.log(a);

// let a = "Hello"
// // let a = "Yash"
// a = "Yash"
// console.log(a);

// const a = "Hello"
// // const a = "Yash"
// // a = "Yash"
// console.log(a);

// if (1 == 1) {
//     // var a = "Hello"
//     // let a = "Hello"
//     // console.log(a);
//     const a = "Hello"
//     console.log(a);
// }

// // console.log(a);

for(var a=1; a <= 5; a++){
    console.log("Inner Forloop", a);
}

console.log("Outer Forloop", a);

// for(let a=1; a <= 5; a++){
//     console.log("Inner Forloop", a);
// }

// console.log("Outer Forloop", a);