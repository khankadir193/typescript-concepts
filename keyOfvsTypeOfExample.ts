/*
keyof operator:-keyof operator give you the union of all property name (keys) of types.

typeof:used to get the typeof a variable and object.

*/

interface User {
    name:string,
    age:number,
    email:string
}

type userKeys = keyof User;

let key:userKeys = "email";

console.log('userKeys...',key);

//type of

const person = {
    name:"Abdul",
    Age:20,
    isActive:true
}

type personType = typeof person;
let val:personType

console.log(typeof person.name);