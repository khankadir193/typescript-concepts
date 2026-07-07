/* Write a function called `calculateArea` that takes 
length and width (both number) and returns area (number) */

const calculateArea = (length: number, width: number): number => {
    const area = length * width;
    return area;
}

console.log("calculateArea:-", calculateArea(23, 47));

/*
Create a function `greetUser` that takes:
- name (string)
- greeting (string, default = "Hello")
*/

const greetUser = (name: string, greeting: string = "Hello"): string => {
    return `${greeting} ${name}`;
}

console.log("greetUser:-", greetUser("Abdul Kadir Khan"))

/*
Write a function `findMax` that takes any number of numbers 
and returns the biggest number
*/
const findMax = (arr: number[]): number => {
    let maxValue = 0;

    for (const ele of arr) {
        if (ele > maxValue) {
            maxValue = ele;
        }
        // maxValue = ele > maxValue ? maxValue = ele : maxValue;
    }

    return maxValue;
}
const array: number[] = [23, 1, 3, 43, 8, 7, 4, 5];

console.log("findMaxValue:-", findMax(array))


