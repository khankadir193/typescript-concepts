/*
what is type gaurd:-A type gaurd is a way to check the type of a value at runtime and tell
typescript now i know this is this type.
Think of a type guard as a helper function that teaches TypeScript a type:

*/

//type of type guard.
function printType(value:string | number){
    if(typeof value === 'string'){
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(2));
    }
};

printType("Abdul kadir khan");
printType(93838);

//instance of typeguard
console.log('instance of guard');
class Dog{
    bark(){
        console.log('woof');
    }
}

class Cat {
    meow(){
        console.log('Meow.!');
    }
}

const dog = new Dog();
const cat = new Cat()

function makeSound(animal: Dog | Cat){
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
}

makeSound(dog);
makeSound(cat);

//in operator type guard.

console.log('in operator typeguard..');
type User = {
    name:string,
    email:string
}

type Admin = {
    name:string,
    role:string
}

function printInfo(person:User | Admin){
    if('email' in person){
        console.log(person.email);
    }else{
        console.log(person.role);
    }
}

const user: User = {
    name:'Abdul Kadir Khan',
    email:'abdulkadirk059@gmail.com'
}

const admin: Admin={
    name:'Abdul Jabir Khan',
    role:'Software Engineer'
}

printInfo(user);
printInfo(admin);


//user defined type guard (Advance)
//custom type guard
function isString(value:any): value is string{
    return typeof value === 'string';
}

function process(value:string | number){
    if(isString(value)){
        console.log(value.toLocaleLowerCase());
    }
}

process("PROCESS Abdul Kadir Khan");
process(34343);

// Custom type guards become useful when the check is more complex and you want to reuse it.