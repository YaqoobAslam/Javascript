class ClassWithStaticMethod{
    static staticMethod(){
        return 'static method has been called.';
    }
}

console.log(ClassWithStaticMethod.staticMethod());

//---------------------------------------------------
class Triple {
    static triple(n =1){
        return n*3;
    }
}

class BiggerTriple extends Triple{
    static triple(n){
        return super.triple(n) * super.triple(n);
    }
}

console.log(Triple.triple());
console.log(Triple.triple(6));

var tp = new Triple();

console.log(BiggerTriple.triple(3));

console.log(tp.triple());
//--------------------------------------------------

class StaticMethodCall{
    static staticMethod(){
        return 'Static method has been called';
    }
    static anotherStaticMethod(){
        return this.staticMethod() + 'from another static method';
    }
}

StaticMethodCall.staticMethod();
StaticMethodCall.anotherStaticMethod();

//--------------------------------------------------

class StaticMethodCall{
    constructor(){
        console.log(StaticMethodCall.staticMethod());
        console.log(this.constructor.staticMethod());
    }
    static staticMethod(){
        return 'static method has been called';
    }
}
