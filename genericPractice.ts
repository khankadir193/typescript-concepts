/*
Exercise 1: Simple Generic Function

Create a generic function `identity` that returns the same value it receives.
*/

function identity <T>(args: T) :T{
    return args;
}

console.log(identity(234))
console.log(identity(['jabir','kadir','areeb','abdullah']));

/*
Exercise 2: Generic Array Utility
Create a generic function `reverseArray` that reverses any type of array
*/

function reverseArray <T>(args:T[]):T[]{
   let element = args.reverse();
   return element; 
}

console.log('reverse generic array:-',reverseArray([1,2,3,4,5,9,10]));
console.log('reverse generic array:-',reverseArray(["hello","how","are","you"]));

/*
Exercise 3: Generic Interface
Create an interface `Response<T>` that has:

*/

interface Responses<T>{
    success:boolean,
    data:T,
    message?:string
}

const response:Responses<string> = {
    success:true,
    data:'what are you doing',
    message:'no message'
}

console.log('generic interface..',response);