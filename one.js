// let x = 10;
// let y = 5;
// console.log(x+y)

// function xyz(a, b){   // a and b are parameters
//     console.log("hello")
//     console.log(a)
//     console.log(b)
// }

// xyz(10, "hii") //data passed in funtion calling is known as arguments
// console.log(xyz)


// function A(){
//     console.log("first function")
// }

// function B(e,f){
//     console.log(e)
//     f()
// }
// B(10, A)  //here A is cb function 
// Callback Function --> functions that are passed into another function as an  argument are known as cb function .

// HOF --> function that take another function as an argument are known as HOF



// console.log("one")
// console.log("two")
// console.log("three")



// console.log("one");

// setTimeout(()=>{
//     console.log("two")
// }, 4000)



// console.log("four")


function A(x, y){
    console.log("one");
    x(y)
}

function B(y){
    setTimeout(()=>{
    console.log("two")
    y()
}, 4000)
}

function C(){
    console.log("four")
}

A(B, C)







