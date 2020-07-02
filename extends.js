class DateFormatter extends Date {
    getFormattedDate(){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
        return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
}

//---------------------------------------------

class Square extends Polygon {
    constructor(length){
        super(length,length);

    }
    get area(){
        return this.height * this.width;
    }
}

class myDate extends Date {
    getFormattedDate(){
        var months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
    }
}