function multiply(a, b=1){
    return a * b;
}
console.log(multiply(5,2));

console.log(multiply(5));

//--------------------------------

function multiply(a,b){
    return a * b
}

multiply(5,2)
multiply(5)

//---------------------------------

function multiply(a,b){
    b = (typeof b !== 'undefined') ? b : 1
    return a * b
}

multiply(5,2)
multiply(5)

//----------------------------------

function multiply(a, b=1){
    return a*b
}

multiply(5,2);
multiply(5);
multiply(5);

//-----------------------------------

function multiply(a, b=1){
    return a * b
}
multiply(5,2)
multiply(5)
multiply(5, undefined)

//------------------------------------

function test(num =1){
    console.log(typeof num)
}

console.log(test());
console.log(test(undefined))
console.log(test(''))
console.log(test(null))

//-------------------------------------

function append(value, array =[]){
    array.push(value)
    return array
}

append(1)
append(2)

//--------------------------------------

function callSomething(thing = something()){
    return thing
}
let numberOfTimesCalled = 0
function something(){
    numberOfTimesCalled +=1
    return numberOfTimesCalled
}

callSomething()
callSomething()

//---------------------------------------

function greet(name, greeting, message = message + greeting + ' ' + name){
    return [name,greeting,message]
}
greet('David','Hi')
greet('David','Happy Birthday!')

//----------------------------------------

function go(){
    return ':P'
}

function withDefaults(a,b=5, c=b,d=go(),e=this,f=arguments,g=this.value){
    return [a,b,c,d,e,f,g]
}

function withoutDefaults(a,b,c,d,e,f,g){
    switch(arguments.length){
        case 0:
            a;
        case 1:
            b=5;
        case 2:
            c=b;
        case 3:
            d=go();
        case 4:
            e = this;
        case 5:
            f=arguments;
        case 6:
            g=this.value;
        default:
    }
    return [a,b,c,d,e,f,g];
}

withDefaults.call({value:'=^_^='});
withoutDefaults.call({value: '=^_^='});

//-------------------------------------------
function f(x=1, y){
    return [x,y]
}
f()
f(2)

//--------------------------------------------

function f([x,y] = [1,2],{z:z}={z:3}){
    return x + y + z
}
f()