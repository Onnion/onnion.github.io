function similara(a,b) {
    var lengthA = a.length;
    var lengthB = b.length;
    var equivalency = 0;
    var minLength = (a.length > b.length) ? b.length : a.length;    
    var maxLength = (a.length < b.length) ? b.length : a.length;    
    for(var i = 0; i < minLength; i++) {
        if(a[i] == b[i]) {
            equivalency++;
        }
    }
	var weight = (equivalency / maxLength)*100;
	changeColor(weight);
	$("#nota").text((weight).toFixed(2));
}

function similar(a,b) {
    var asplit = a.split(" ");
    var lengthAsplit = asplit.length;
    var bsplit = b.split(" ");
    var lengthBsplit = bsplit.length;
    var nota = 0

    if (lengthAsplit > lengthBsplit) {
        alert("Revise seu texto, existem palavas faltando");
    }else if(lengthAsplit < lengthBsplit){
        alert("Revise seu texto, existem palavas a mais");
    }
    for (var i in asplit){
        for(var j in bsplit){
            if (bsplit[j] == asplit[i]) {
                nota+=1;
                break;
            }
            else{
                for(var letraA in asplit[i]){
                    for(var letraB in bsplit[j]){

                    }

                }
            }
        }
    }
    
    nota = nota*100/lengthAsplit;
    changeColor(nota);
    $("#nota").text((nota).toFixed(2));
}

function changeColor(num){
    if (num > 70) {
        $("#nota").addClass("text-success");
    }
    else if(num < 70){
        $("#nota").addClass("text-danger");
    }
    else{
        $("#nota").addClass("text-warning");
    }
}