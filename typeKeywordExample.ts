//types with multiple primitve type and objects.
//type:- it can create aliases for many different kind of types.
// 1.string
type userName = string;
let names:userName = "Abdul Kadir Khan",

//2.number
type UAge = number;
let userAge:UAge = 23;

//3.boolean
type isAdmin = boolean;

//4.object
type UserObj = {
    name:string,
    uanNo:number
}

const userObj:UserObj={
    name:"Asad",
    uanNo:89332
}

//5.unions:- A value can be one of several types or values.
type Status = "loading" | "Success" | "Error";
let stat:Status = "Error";

//union of types:can be either string or number
type Id = string | number;
let userId: Id = 123;
userId = "can be string";

//6.tuples:- A tuple is a fixed length array with specific type and specific position.
type Points = [number,string];
const locNum:Points = [98,"Khan kadir"];

//7.array 
type Names = string[];
const namesVal:Names = ["Jabir","Arhan"];

//8.function
type Add = (a:number,b:number) => number;
const add:Add = (a,b)=> a+b;



