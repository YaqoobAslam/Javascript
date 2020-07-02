class Polygon {
    constructor(){
        this.name='Polygon';
    }
}
const poly1 = new Polygon();
console.log(poly1.name);
//-----------------------------------------

class Person{
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const otto = new Person('Otto');
otto.introduce();

//-------------------------------------------

class ValidationError extends Error{
    printCustomerMessage(){
        return `Validation failed :-( (details: ${this.message})`;
    }
}

try{
    throw new ValidationError("Not a valid phone number");
}catch(error){
    if(error instanceof ValidationError){
        console.log(error.name);
        console.log(error.printCustomerMessage());
    }else{
        console.log('Unknown error', error);
        throw error;
    }
}

//-------------------------------------------
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name='ValidationError';
        this.code = '42;'
    }
    printCustomerMessage(){
        return `Validation fail :-( (details: ${this.message}, code: ${this.code})`;

    }
}



try {
    throw new ValidationError("Not a valid phone number");
}catch(error){
    if(error instanceof ValidationError){
        console.log(error.name);
        console.log(error.printCustomerMessage());
    }else{
        console.log('Unknown error', error);
        throw error;
    }
}

//-----------------------------------------------------

class Square extends Polygon {
    constructor(length){
        super(length,length);
        this.name = 'Square';
    }
    get area(){
        return this.height * this
    }
    set area(value){
        this.height = value**0.5;
        this.width = value**0.5;
    }
}

//-------------------------------------------------------

class Polygon {
    constructor(){
        this.name = "Polygon";
    }
}
class Square extends Polygon{
    constructor(){
        super();
    }
}
class Rectangle {}

Object.setPrototypeOf(Square.prototype);
console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype);
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype);

let newInstance = new Square();
console.log(newInstance.name);

//---------------------------------------------------------
