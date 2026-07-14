/*
what is Enum:-Enum (Enumeration) is a way to define a set of named constants.
It makes your code more readable and safe.

-Enum (Enumeration) in TypeScript is a feature used to define a set of named constant values. It 
makes code more readable and helps avoid using hard-coded numbers or strings.

*/

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move);

enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Loading = "LOADING"
}

let apiStatus:Status = Status.Success;
console.log(apiStatus)


//real project example:-
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER",
    Guest = "GUEST"
}


const checkPermission = (role:UserRole):void=>{
    if(role === UserRole.Admin){
        console.log('Full Access...');
    }else{
        
    }
}

checkPermission(UserRole.Admin);