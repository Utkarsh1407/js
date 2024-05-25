// SINGLETON
// Object.create()


// OBJECT LITERALS
const mySym= Symbol("Key1")

const jsUser={
    name:"Hitesh",
    [mySym]: "myKey1",
    "full name": "Utkarsh Kumar",  // this can't be accessed by the .fullname method
    age: 18,
    location: "DELHI",
    email: "utkarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email="utkarsh@chatgpt.com"
Object.freeze(jsUser)
jsUser.email="utkarsh@microsoft.com"
// console.log(jsUser);

// jsUser.greeting= function(){
//     console.log("Hello JS User");
// }
// console.log(jsUser.greeting());


jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());