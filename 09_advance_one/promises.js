// const promiseOne= new Promise(function(resolve,reject){ // promise is a object as well  
//     // do asyn tasks
//     // DB Calls, cryptography, network

//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000);
// })

// promiseOne.then(function(){     // then is realted to resolve part of the promise object.
//     console.log("promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
// })

// const PromiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         setTimeout(function(){
//             resolve({username: "Chai", email: "chai@example.com"})
//         })
//     },1000)
// })

// PromiseThree.then(function(user){
//     console.log(user);
// })

const PromiseFour= new Promise (function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else{
            reject("ERROR: Something went wrong.")
        }
    },1000)
})

// PromiseFour.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("the promise is either resolved or rejected"))

const PromiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject("ERROR: Js went wrong.")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const respone = await PromiseFive
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.