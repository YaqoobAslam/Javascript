
function sum(...theArgs){
    return theArgs.reduce((previous,current)=>{
        return previous + current;
    });
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
//---------------------------------------------

//From arguments to an array
function f(a,b) {
    let normalArray = Array.from(arguments);
    let first = normalArray.shift();
    console.log(first);
}

function f(...args){
    let normalArray = args
    let first = normalArray.shift()  // OK, gives the first argument
}

//---------------------------------------------
//Using rest parameters

function myFun(a,b, ...manyMoreArgs){
    console.log("a",a)
    console.log("b",b)
    console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one","two","three","four","five","six");
//---------------------------------------------

//Argument length
function func1(...theArgs){
    console.log(theArgs.length);
}

func1();
func1(5);
func1(5,6,7);

//----------------------------------------------

//Ordinary parameter and rest parameters

function multiply(multiplier,...theArgs){

    return theArgs.map(element =>{
        return multiplier * element
    })
}

let arr = multiply(2,1,2,3);
console.log(arr);

//------------------------------------------------

//Use with the arguments object
function sortRestArgs(...theArgs){
    let sortedArgs = theArgs.sort()
    return sortedArgs
}

console.log(sortRestArgs(5,3,7,1))

//--------------------------------------------------

function sortArguments(){
    let sortedArgs = arguments.sort()
    return sortedArgs
}

console.log(sortedArgs(5,3,7,1))

//----------------------------------------------------
function sortArguments(){
    let args = Array.from(arguments);
    let sortedArgs = args.sort();
    return sortedArgs;
}

console.log(sortArguments(5,3,7,1));