// How many type function 

// Part One
function chai1(){
    let username1 = "hitesh"
    console.log(this.username1);
    
}
chai1()
// =============================================================================

// Part Two
const chai2 = function(){
    let username1 = "hitesh"
    console.log(this.username1);
}
chai2()
// =======================================================================
// Part Three
const chai3 = () => {
    let username1 = "hitesh"
    console.log(this.username1);
}
chai3()

// ==================================================================

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,3));
// =======================================================================


// =====================================================================
// implicit return
// Part Four

// const addTwo = (num1,num2) =>  num1 + num2
// console.log(addTwo(4,3));

// or

// const addTwo = (num1,num2) =>  (num1 + num2)

// console.log(addTwo(4,3));

// or

const addTwo = (num1,num2) =>  ({username: "hitesh"})

console.log(addTwo(4,3));