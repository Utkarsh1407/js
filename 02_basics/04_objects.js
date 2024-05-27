// const tinderUser= new Object()  ** It is a singleton Object. **
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedin= false

// console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"Utkarsh",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
