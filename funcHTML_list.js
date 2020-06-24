function list(type) {
    var html = '<' + type + 'l><li>';
    var args = Array.prototype.slice.call(arguments, 1);
    html += args.join('</li><li>');
    html += '</li></' + type + 'l>';
    return html;
    
}

    let listHTML = list('u','One','Two','Three');
    console.log(listHTML);