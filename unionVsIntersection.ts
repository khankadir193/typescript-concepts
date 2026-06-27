/*
Union type:a value can be one type or another type.
intersection type: combine multiple type into one.
*/

let ids: string | number;
ids = 101;
ids = 'user101';
// ids = false;  //this will be get the error 
// console.log('id:-',ids)

const printId = (id: number | string)=>{
    if(typeof id === 'number'){
        console.log('id number',id);
    }else if(typeof id === 'string'){
        console.log('id string',id)
    }
}

printId(ids);

//intersection using &

type Persons = {
    name:string
}

type Employe = {
    employeeId:number
}

type staff = Persons & Employe;

//or 
// type staff = {
//     name:string,
//     employeeId:number
// }

const workerStaff:staff = {
    name:"Abdul Kadir Khan",
    employeeId:101
}

console.log('staff',workerStaff);


//interface are using the new 

interface Vehicle{
    brand:string,
    model:string
}

interface Electric{
    battery:number
}

type v1 = Vehicle | Electric;

const vehicle:v1 = {
    brand:'tata',
    model:'model 3',
    battery:9,
}

console.log('interface for union',vehicle)

type v2 = Vehicle & Electric;

const vehile2:v2={
    brand:"tvs",
    model:"model 4",
    battery:494
}

console.log('interface for the intersection',vehile2);