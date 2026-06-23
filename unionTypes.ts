//what is union types.
//union type simple mean variable can hold more than one type of value.
// it is written using the pipe symbol (like OR |)
//basic union type
let id: string | number;
id = 101;
id = 'kadir';
// id = false  this will get the error because it can only string/number.

let statuses: "success" | "error" | "loading";  // Literal Union (very common)

//with arrays
let datas:(string | number) [] = ['kadir',34,'jabir',20];
console.log(datas)

function getId(id: string | number){
    console.log('---',id);
};
getId("kadir");
getId(45);