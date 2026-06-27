/*
interface:-Interface define the shape of an object and classes.
it's support the declaration merging (extending the same interface with multiple times).
making them highly extensible.
*/



interface firstObj  {
    name:string,
    age:number
}

const obj:firstObj ={
    name:'Abdul Kadir Khan',
    age:29
}

console.log('basic level of interface:-',obj);

//this is simple way
interface car {
    brand:string,
    model:string,
    year:number,
    color?:string
}

function getCarDescription(CAR:car):string{
    const color = CAR.color ?? "";

    return `${CAR.brand} ${CAR.model} ${CAR.year} ${color}`
}

const myCar:car = {
    brand:'Thar',
    model:'Mahindra',
    year:2021,
    color:'black'
}

console.log(getCarDescription(myCar));




