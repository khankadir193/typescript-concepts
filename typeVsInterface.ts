/*
what is interface:- A blueprint that describes the structure of an object.
what is type :- A name (Alias) for any type (objects,strings,unions,tuples,etc). 
one line memory trick
Interface:- object blueprint.
Type:- type nickname(alias).
because type can describe many things,while interface is mainly used to describe object
shapes.
*/

//interface example:-
interface User {
    name:string,
    age:number
}

const user:User={
    name:"Abdul Kadir Khan",
    age:29,
    roll:490,
    address:"lucknow"
}

console.log("before combine object:-",user,user.name,user.age);
//you define the same interface multiple times
//typescript automatically combines them.
interface User {
    roll:number
}
interface User{
    address:string
}

const user2:User={
    name:"Abdul Jabir Khan",
    age:20,
    roll:101,
    address:"padari"
}

console.log("combine the object",user2,user2.name,user2.roll);

//we extend the property from parent object into child object.
interface Person{
    name:string
}

interface Employee extends Person{
    empCode:number,
    empCompany:string
}

const emp:Employee={
    name:"Areeb Khan",
    empCode:304,
    empCompany:"Google"
}

console.log('extending the object',emp,emp.name,emp.empCompany);

//type example:-
type Users = {
    name:string,
    age:number
}

const users:Users={
    name:"Rehan khan",
    age:12
}
console.log('simple type:-',users,users.age);

/*
The biggest difference:-
type can describe more things which interface can not do.
union types:-
type status = "loading" || "success" || "error";
primitive alias:-
type userId = string;
tuples:-
type Point = [number,number];
type can not be the merge just like above interface has some same objects.
type and interface both supports the extension.
& means :- combines types object or extending.
*/
//extension:extending the property from parent object into child object.
type Person2 = {
    name:string
}

type Employees = Person2 &{
    salary:number
}

const empUser:Employees = {
    name:"Abdullah",
    salary:57497
}

console.log('types extending:-',empUser,empUser.name);