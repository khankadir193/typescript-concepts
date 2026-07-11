function formatInput (input:string | number):string{
    if(typeof input === 'string'){
        return input.toUpperCase();
    }else{
        return `₹ ${input}`;
    }
}

console.log(formatInput('abdul kadir khan'));
console.log(formatInput(84393));

//Exercise:-2=> Union of Objects.
type SuccessResponse = {success:"success",data:string};
type ErrorResponse = {success:"error",message:string};

function handleResponse (response:SuccessResponse | ErrorResponse){
    if('data' in response){
        console.log('Success:-',response.data);
    }else{
        console.log('Error:-',response.message);
    }
}

const successResponse:SuccessResponse = {
    success:'success',
    data:'This is the success response..'
}
const errorResponse:ErrorResponse = {
    success:'error',
    message:'this is the error response..'
}

handleResponse(successResponse);
handleResponse(errorResponse);