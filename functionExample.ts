/*
what is function:-function is a reusable block of code that perfroms the specific task.

*/

/* 
if function is declare number this means this is the return type.
you have to return value particular type(number);
*/
function add(a: number, b: number): number {

    return a + b;
};

console.log("normal function", add(10, 49));

//arrow function
const greet2 = (name: string): string => {

    return `Hello ${name}`;
}

console.log("arrow function....", greet2("Abdul Kadir Khan"));


//function with no return

const logMessage = (message: string): void => {
    console.log(`Hey: ${message}`);
}

logMessage("you have to learn the typescript.");


//optional parameters..
function introduce(name: string, age?: number) {
    console.log(`Hello ${name} and ${age ?? 0}`);
}

introduce("Abdul Jabir Khan");
introduce("Abdul Jabir Khan", 20);


//default parameters
function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log(multiply(20));
console.log(multiply(20 * 30));


//rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("sum of total value..", sum(1, 2, 3, 4, 5, 6));

//function types(Advance but important)
type MyFunction = (x: number, y: number) => number;
const addVal: MyFunction = (x, y) => x + y;
console.log('addVal advance concept...', addVal(97, 43));