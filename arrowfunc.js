const materials =[
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
console.log(materials.map(material => material.length));

//Parentheses are optional when there's only one parameter name:
(singleParam) =>{statement}
singleParam =>{statement}

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statement }

// Parenthesize the body of a function to return an object literal expression:
params => ({foo: bar})

//------------------------------------

var elements = [
    
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
// This statement returns the array: [8, 6, 7, 9]
elements.map(function(element){
    return element.length;
});
//-----------------------------------------


// The regular function above can be written as the arrow function below
elements.map((element)=>{
    return element.length;
});

// ----------------------------------------

// When there is only one parameter, we can remove the surrounding parentheses
elements.map(element =>{
    return element.length;
});

//----------------------------------------

// When the only statement in an arrow function is `return`, we can remove `return` and remove
// the surrounding curly brackets
elements.map(element => element.length);

//----------------------------------------

function Person(){
    this.age = 0;
    setInterval(function growUp(){
        this.age++;
    }, 1000);
}

var p = new Person();

//---------------------------------------

function Person(){
    this.age = 0;
    setInterval(()=>{
        this.age++;
    },1000);
}

var p = new Person();

//-----------------------------------------

var f = () =>{
    'use strict'; 
    return this;
    f() === window;
};

//-------------------------------------------

var adder = {
    base : 1,
    add: function(a){
        var f = v => v + this.base;
        return f(a);
    },

    add: function(a){
        var f = v => v + this.base;
        return f(a);
    },
    addThruCall: function(a){
        var f = v => v + this.base;
        var b = {
            base: 2
        };
        return f.call(b,a);
    }
};

console.log(adder.add(1));
console.log(adder.addThruCall(1));





