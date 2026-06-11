//what is an array?
//An array list of values in same types.
//you can store many names,numbers,true/false etc.

//array of strings
let names:string[] = ['kadir','jabir','areeb','abdullah','asad','daniyal','ahan'];
//array of numbers
let numbers:number[] = [10,20,30,40,50,60,70];
//array of booleans
let passed:boolean[] = [true,false,false,false,true,false];
//using array keyword another way.
let cities: Array<string> = ['mumbai','lucknow','gorakhpur'];


//push the item's
// names.push(45) i can not push number into string array.
names.push('zain');
numbers.push(1000);
cities.push('delhi');
passed.push(false);

console.log(names[4]); // get the names corresponding index.
console.log(numbers);
console.log(cities);
console.log(passed);
console.log(names.length) // get size of array.