/*
Question:-What are Utility Types in TypeScript?
ANs:-Utility Types are built-in TypeScript types that help you create new types from existing types 
without rewriting everything.
*/

//Partial<T> => make all properties optional.

interface Users {
    name: string,
    age: number,
    email: string
}

const updateUser: Partial<Users> = {
    name: 'Abdul Kadir Khan',
    email: 'abdulkadirkhan@gmail.com'
}

console.log('Partial type:-', updateUser);

//Required<T> => Makes All properties required.opposite of Partial.
interface NObj {
    name: string,
    houseNumber: number,
    address: string
}

const nObj: Required<NObj> = {
    name: "Abdul Kadir Khan",
    houseNumber: 23,
    address: "Pandri,siddharthnagar"
}

console.log("Required Types:-", nObj);

//ReadOnly<T> => Make all properties readOnly.
const config: Readonly<Users> = {
    name: "Rehan Khan",
    age: 30,
    email: "admin@gmail.com"
}

console.log("Read Only...", config);

//Pick<T,K> => Pick only specific properties.
type UserObj = {
    id: number,
    name: string,
    email: string,
    password: number,
    age: number
}

const user: UserObj = {
    id: 101,
    name: "Abdullah",
    email: "abdullah@gmail.com",
    password: 839392,
    age: 8
}

type UserPreview = Pick<UserObj, "name" | "email">;

const preview: UserPreview = {
    name: "Kadir",
    email: "manager@gmail.com"
}

console.log("Pick types =>", preview);

//Omit<T,K> -> Remove Specific Properties.
type userWithoutEmail = Omit<UserObj, 'email'>
const usersWithoutEmail: userWithoutEmail = {
    id: 102,
    name: "john doe",
    password: 234324,
    age: 34
}

console.log("omit types:", usersWithoutEmail);

//Record<K,T> => create object with fixed keys.k = key,T = value types.
type Scores = Record<string, number>

const studentScores: Scores = {
    math: 80,
    science: 40,
    english: 30
}
console.log('Record ->', studentScores);

//Exclude<T,U> => Remove types.It removes from T all types that are assignable to U.
type status = "success" | "error" | "loading";
type ValidStatus = Exclude<status, "success">;
const status1: ValidStatus = "error";
const status2: ValidStatus = "loading";
console.log('Exclude types:-', status1, status2)

//Extract<T, U> — Extract specific types.opposite Exclude.keeps only matching types.

type color = "blue" | "red" | "purple" | "green" | "white";
type validColor = Extract<color, "red" | "green" | "white">
const color1: validColor = "green";
const color2: validColor = "white";
const color3: validColor = "red";

console.log("Extract types:-", color1, color2, color3);

