// for of loop 

const array= [1,2,3,4,5]

for (const num of array) {
    // console.log(num);
    
}

const greeting = "hello world!!"
for (const greet of greeting){
    // console.log(`Each char is ${greet}`);
}

// MAPS

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States Of America")
map.set('FR',"France")
// console.log(map);

for (const [k,v] of map) {  // k-> key     v->
    console.log(k, ":-", v);
}

const myobject={
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [k,v] of Object) {
//     console.log(k, ":-", v);
// }
