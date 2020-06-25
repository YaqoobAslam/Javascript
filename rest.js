// function foo(...args){
//     return args;
// }

// console.log(foo(1,2,3));

// //---------------------------------
// function func(a){
//     arguments[0] = 99;
//     console.log(a);
// }

// func(10);
//---------------------------------
function func(a =55){
    a= 99; 
    console.log(arguments[0]);
}

func(10);

//---------------------------------

function func(a = 55){

    console.log(arguments[0]);
}

func();
