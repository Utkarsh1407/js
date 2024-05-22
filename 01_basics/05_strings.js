const name="Hitesh"
const repoCount= 50
// console.log(name+repoCount+" Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount }`);

let gameName= new String("SMASH-KARTS")
// console.log(gameName[4]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("A"));

const newString= gameName.substring(0,4)
// console.log(newString);

const anotherString= gameName.slice(-8,6)
// console.log(anotherString)

const newStringOne= "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20","-"));