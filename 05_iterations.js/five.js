const coding=["js","ruby","python","cpp"];

// coding.forEach(function (value){
//     console.log(value);
// })

// coding.forEach( (item => {
//     console.log(item)
// }))

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item,index,array) => {
    // console.log(item, index, array);
})

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
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )