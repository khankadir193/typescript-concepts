//what is tuple?
//tuple is a special type of array. you know exactly how many items will be there.
//each position can have the different type.
// Important: Tuples have fixed length and fixed type order.

let person1:[string,number,boolean] = ['Kadir',29,true];
let student2:[string,number] = ['Abdullah',12];
type Point2 = [number,number];
let coordinate:Point2 = [10,20];

student2.push('extra'); //it can give the error on strict mode.
console.log(person1);
console.log(student2);
console.log(coordinate);



// Feature,                     Array,                                      Tuple
// Length,              "Can grow (push, pop)",                          Fixed length
// Types,                 All items same type,                          Can have different types
// Use Case,         List of similar things,                            Fixed structure (like record)
// Example,                  string[],                                 "[string, number]"
