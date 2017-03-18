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

    for (var i in asplit){
        for(var j in bsplit){
            if (bsplit[j] == asplit[i]) {
                nota+=1;
                break;
            }
        }
    }
    
    nota = nota*100/lengthAsplit;
    changeColor(nota);
    $("#nota").text((nota).toFixed(2));

    if ((lengthAsplit > lengthBsplit) & (nota < 100.00) ) {
        $(".erro").text("Revise seu texto, existem palavas faltando");
        $(".erros").removeClass("hidden");
    }else if((lengthAsplit < lengthBsplit) & (nota < 100.00) ){
        $(".erro").text("Revise seu texto, existem palavas a mais");
        $(".erros").removeClass("hidden");
    }
}

function changeColor(num){
    if (num > 70) {
        $("#nota").addClass("text-success");
        $("#nota").removeClass("text-danger");
        $("#nota").removeClass("text-warning");
    }
    else if(num < 70){
        $("#nota").addClass("text-danger");
        $("#nota").removeClass("text-success");
        $("#nota").removeClass("text-warning");    
    }
    else{
        $("#nota").addClass("text-warning");
        $("#nota").removeClass("text-success");
        $("#nota").removeClass("text-danger");

    }
}