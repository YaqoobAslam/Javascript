// const obj = {
//     log: ['a','b','c'],
//     get latest(){
//         if (this.log.length === 0){
//             return undefined;
//         }
//         return this.log[this.log.length-1];
//     }
// };

// console.log(obj.latest);
//------------------------------------------

// const obj ={
//     log:['example','test'],
//     get latest(){
//         if(this.log.length === 0)
//         return this.log[this.log.length-1];
//     }
    
// }
// console.log(obj.latest);

// //-------------------------------------------
// //Defining a getter on existing objects using defineProperty

// const o = {a: 0};
// Object.defineProperty(o,'b',{get: function() {return this.a + 1;}});
// console.log(o.b)

//---------------------------------------------

//Using a computed property name
// const expr = 'foo';

// const obj = {
//     get [expr](){
//         return 'bar';
//     }
// };

// console.log(obj.foo);

//-----------------------------------------------

class Example {
    get hello(){
        return 'world';
    }
}

const obj = new Example();
console.log(obj.hello);
//-----------------------------------------------


console.log(Object.getOwnPropertyDescriptor(obj,'hello'));

console(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj),'hello'));