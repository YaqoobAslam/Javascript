function getCookie(cname){
    var name = cname + "=";
    var decodedCookies=decodeURIComponent(document.cookie);
    var ca = decodedCookies.split(';');
    for (var i = 0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' '){
            c = c.substring(1);
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
    }
    return " ";
}

function checkCookie(){
    var username = getCookie("username");
    if(username != ""){
        alert("Welcome again" + username);
    }else{
        username=prompt("Please enter your name:", " ");
        if(username !="" && username !=null){
            setCookie("username", username, 365);
        }
    }
}