// PRIMITIVE DATA TYPES

// 7 types: string,number,boolean,null,undefined,symbol,bigint

// Reference (Non Primitive)

// Arrys,objects,functions

const id = Symbol("123")
const anotherId= Symbol("123")
// console.log(id == anotherId);

const heros= ["shaktimann","naagraj","doga"]
let myObj={
    name: "hitesh",
    age: 22
}

const myFunction = function(){
    // console.log("hello world");
}
// console.log(typeof(myFunction));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive),  Heap(Non-Primitive)

let myYtName= "Utkarsh"
let anotherName= myYtName

anotherName= "vaibhu"
// console.log(anotherName);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne
userTwo.email="vaibhu@google.com"

console.log(userOne.email);
console.log(userTwo.email);