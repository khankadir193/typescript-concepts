//what are the types:-basically types are tell the computer. what kind of type can hold 
// the variable. may be it can be any types like string,number,boolean,null,undefine

//string
let fullName: string = 'abdul kadir khan';
let city: string = 'gorakhpur';
//number
let age:number = 12;
//boolean
let isStudent:boolean = false;
let isMarried:boolean = true;

//null vs undefined
let data:null = null;
let value:undefined = undefined;

console.log(fullName);
console.log(city);
console.log(age);
console.log(isStudent);
console.log(isMarried);
console.log(data);
console.log(value);


//method2: without type (typescript guess it)
let isActive = true;
let finalName = 'Abdul Jabir Khan'

// finalName = 23; if we assign number it will get error because
// it's defined the already string.


//this guessing is called type interface.
//Important Rule:-
//once you give a type to a variable, you can not change it 
//another type.


