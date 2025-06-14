// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
  // console.log(num);
  
}


const greetings = "Hello world!"
for (const greet of greetings) {
  if (greet == " ") {
    continue
  }
  // console.log(`Each char is ${greet}`);
  
}
// ============================================================================================================================================================================


// Maps

const map = new Map()
map.set("IN", "India")
map.set("IN", "India") // Duplicate print nhi hoga
map.set(91, "India")
map.set("USA","United States of America")
map.set("Fr","France")

const usercode = 91

// console.log(map.get(usercode));
// console.log(map.size);
// console.log(map);

//  ============================================================================================================================================================================

// for loop key,value ke sath
for (const [key,value] of map) {
  //console.log(key,"=",value);
  
}


// Object me for of loop nhi chalega 
const myObject = {
  "game1": "NFS",
  game2: "Spiderman"  
}
//for (const [key,value] of myObject) {
 // console.log(key, "=", value);
  
//}

//  ============================================================================================================================================================================


// Object me For loop 

const myObj = {
  js: 'javascript', 
  cpp: 'C++',
  rb: "ruby",
  swift: 'swift by apple '
}

for (const key in myObj) {
    // console.log(myObj[key]);
    //console.log(key);   
}

for (const key in myObj) {
    // console.log(myObj[key]);
    //console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

//  ============================================================================================================================================================================

// Array me For loop kaise work hota hai

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(key);
    
}

for (const key in programming) {

    //console.log(programming[key]);
}

//  ============================================================================================================================================================================

//  Map ke andar for loop in nhi chalta hai kyunki Map iterable nhi hai

const mapp = new Map()
mapp.set("IN", "India")
mapp.set("IN", "India") // Duplicate print nhi hoga
mapp.set(91, "India")
mapp.set("USA","United States of America")
mapp.set("Fr","France")

for (const key in mapp) {
    // console.log(key);
}
//  ============================================================================================================================================================================

// forEach loop function ke sath kaise use karu


const coding = ["js","ruby","java","python","cpp"]
// coding.forEach( function (item) {
//   console.log(item);

// } )


// coding.forEach ( (item) => {
//     console.log(item);
    
// }  )


// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


//  ============================================================================================================================================================================

// Array and Object

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);

} )

//  ============================================================================================================================================================================


