
opsy.closeAlert = function(callback=false) {
    document.getElementById("alert").setAttribute("active", "false");
    opsyCore.callback(callback);
}

opsy.alert = function(title, content, color, callback=false) {
    if(document.getElementById("alert").getAttribute("active")=="true") {
        opsy.closeAlert();
    
        setTimeout(function() {
            document.getElementById("alert").style.backgroundColor = color;
            document.getElementById("alert").setAttribute("active", "true");
            document.getElementById("alert-title").innerText = title;
            document.getElementById("alert-content").innerText = content;
            opsyCore.callback(callback);
        }, 200);
    } else {
        document.getElementById("alert").style.backgroundColor = color;
        document.getElementById("alert").setAttribute("active", "true");
        document.getElementById("alert-title").innerText = title;
        document.getElementById("alert-content").innerText = content;
        opsyCore.callback(callback);
    }
    
}

opsy.info = function(title, content, callback=false) {
    opsy.alert(title, content, "#B6BCE9", callback);
}

opsy.warn = function(title, content, callback=false) {
    opsy.alert(title, content, "#BEA200", callback);
}

opsy.error = function(title, content, callback=false) {
    opsy.alert(title, content, "#BD2C26", callback);
}