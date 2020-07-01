class Polygon {
    constructor(height, width){
        this.area = height * width;
    }
    
}
console.log(new Polygon(4,3).area);
//----------------------------------------------


class Polygon{
    constructor(height, width){
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon{
    constructor(length){
        super(length,length);
        this.name='Square';
    }
}

//------------------------------------------------

