// const language = {
//     set current(name){
//         this.log.push(name);
//     },
//     log: []
// };

// language.current ='EN';
// language.current ='FA';

// console.log(language.log);

//---------------------------------------------
// const language ={
//     set current(name){
//         this.log.push(name);
//     },
//     log: []
    
// }

// language.current = 'EN';
// console.log(language.log);

// language.current = 'FA';
// console.log(language.log);

//----------------------------------------------
//Defining a setter on existing objects using defineProperty
const o = {a: 0};

Object.defineProperty(o,'b',{
    set: function(x) {this.a=x/2;}
});

o.b=10;
console.log(o.a);

//-----------------------------------------------
//Using a computed property name

const expr = 'foo';

const obj ={
    baz: 'bar',
    set [expr](v) {this.baz =v;}
};

console.log(obj.baz);

obj.foo = 'baz';
console.log(obj.baz);

//------------------------------------------------
