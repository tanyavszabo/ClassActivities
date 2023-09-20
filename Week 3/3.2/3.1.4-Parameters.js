// Named Parameters


// write a function that takes two named parameters:

// print each named parameter,
// then return the parameters added together
function functionWithTwoParameters (parm1 = 10, param2 = 20){
    console.log(parm1);
    console.log(param2);
    return parm1 + param2;
}

// invoke the function and pass in two numbers
functionWithTwoParameters(2,5);

// invoke the function and pass in more than two numbers
functionWithTwoParameters(2,5,10,3,5);
// invoke the function and pass in only one number
functionWithTwoParameters(2);

// change the function to set default values for the parameters


// again, invoke the function and pass in only one number
functionWithTwoParameters(2);
// Rest Operator

// add a rest operator to the function's parameters

// add a line to the function's body to print the value of the rest operator

function functionWithRestParameters (parm1 = 10, param2 = 20 ...restparam){
    console.log(parm1);
    console.log(param2);
    console.log(restparam;)
    return parm1 + param2;


// again, invoke the function and pass in more than two numbers
console.log("Below is fun");
console.log(functionWithRestParameters(1,2,3,4));