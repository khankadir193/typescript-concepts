/*
what is generic:-generic allow you to create reusable code that works with different type.

Think of it like a magic box that can hold:

A box of numbers
A box of strings
A box of users

Instead of making separate boxes for each, you make one flexible box.

<T> means "some type". TypeScript automatically detects it.
*/
//generic function
function getFirt<T>(arr: T[]) {
    console.log("it will accept the any type array:-", arr);
}

getFirt([1, 2, 3, 4, 5, 6, 9]);
getFirt(['abdul', 'kadir', 'khan']);
getFirt([true, false, false, false, true]);


//generic interface
interface Box<T> {
    value: T
}

const numberBox: Box<number> = {
    value: 8373
}

const stringBox: Box<string> = {
    value: "Hey how are you!!!"
}

console.log('generic interface :-', stringBox, numberBox);

//generic class

class Container<T> {
    private data: T

    constructor(data: T) {
        this.data = data
    }

    getData(): T {
        return this.data;
    }
}

const container1 = new Container("Abdul Kadir Khan");
const container2 = new Container(34342);
console.log('generic class string:-',container1.getData());
console.log('generic class number:-',container2.getData());


//generic constraints (extends)
//only allow types that have .length property.
function logLength <T extends {length:number} >(item : T){
    console.log('generic constraints:-',item);
}

logLength([10,20,30,40]);
logLength("Hello constraints");