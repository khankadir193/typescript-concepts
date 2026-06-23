//what is an object:-object is an collection of key/value pairs.like name,value.
//there are two main ways we can define object types.
//1.inline object type (simple for beginners).
let person:{
    name:string,
    age:number,
    isStudent:boolean
} = {
    name:'Abdul Kadir Khan',
    age:29,
    isStudent:false
}

console.log('simple object..',person);

//2.Using Interface (Most recommended & common in interviews).
// optional properties(?):- sometimes property may or may not exist.
interface person {
    name:string,
    age:number,
    isStudent:boolean
    email?:string //this is the optional whether you need define or not.
}

let student:person = {
    name:'Abdul Jabir Khan',
    age:20,
    isStudent:true
}

let school:person = {
    name:'Vellore Institute of technology',
    age:50,
    isStudent:true,
    email:'abdulkadirkhan547@gmail.com'
}

school.email = 'khankadir@gmail.com';

console.log('interface type object..',student);
console.log('school interface',school);


//read only properties.
interface Point{
    readonly x: string,
    readonly y:number
}

let p:Point = {
    x:'no man',
    y:3343
}
// p.x = 'kadir'; // i can not assign the x value because it's read only.
console.log('point value read only',p);


// practice the above concepts

let car:{
    brand:string,
    model:string,
    year:number,
    isElectric:boolean
} = {
    brand:'TVS',
    model:'2024',
    year:2026,
    isElectric:true
};

console.log('car..',car);

interface Student {
    name:string,
    rollNo:number,
    subjects:string[],
    marks?:number
}

let student1:Student={
    name:'Abdul Kadir Khan',
    rollNo:121,
    subjects:['math','english','history','geography'],
    marks:390
}

console.log('student1..',student1);


//union in object

interface Result{
    status:'pass' | 'fail' | 'pending', //literal uinion 
    score: number | string
}

let result:Result={
    status:'pass',
    score: 120
}

let result2:Result={
    status:'fail',
    score: '48'
}


console.log('result...',result);
console.log('result 2',result2);