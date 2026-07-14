/*
keyof operator:-keyof operator give you the union of all property name (keys) of types.

typeof:used to get the typeof a variable and object.

Mapped type:-Mapped Types allow us to create a new type by transforming the properties of an 
existing type. Instead of writing similar types repeatedly, we can generate them automatically.

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

//mapped type:-

//// Make all properties optional
type partialUser = {
    [K in keyof User]? : User[K];
}

// Make all properties readonly
type readOnlyUser = {
    readonly [K in keyof User] : User[K];
}

// Note: Partial<User> and Readonly<User> are utility types that do the same thing internally.



