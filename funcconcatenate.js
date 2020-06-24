function myConcat(separator){
    let args = Array.prototype.slice.call(arguments,1);
    return args.join(separator);
}

console.log(myConcat('; ','red', 'orange', 'blue','yellow','white'));