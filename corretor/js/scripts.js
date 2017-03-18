var text_defaul = "";

/* onLoad */
$(document).ready(function(){
	document.getElementById("exampleSelect1").removeAttribute("disabled");
	document.getElementById("example-textarea-changed").removeAttribute("disabled");
})

/* Recomeçar */
$(document).ready(function(){
	$(".btn-restart").click(function() {
		if(document.getElementById("txt-password-restart").value == "steven"){
			$(".password").removeClass("hidden");
			$(".display-result").addClass("hidden");
			$("#review-texts").removeClass("hidden");
			$("#restart-text").addClass("hidden");
	        $(".erros").addClass("hidden");
			var to_change = document.getElementById("example-textarea-changed")
			to_change.removeAttribute("disabled");
			to_change.value="";
			document.getElementById("txt-password-restart").value="";
			document.getElementById("txt-password").value="";
		}else{
			alert("Área restrita ao professor");
		}
	});
})

/* Corrigir */
$(document).ready(function(){
	$(".btn-password").click(function() {
		if(document.getElementById("txt-password").value == "steven"){
			var textb = $("#example-textarea-changed").val();
			var texta = text_defaul;
			similar(texta,textb);
			$(".password").addClass("hidden");
			$(".display-result").removeClass("hidden");
			$("#review-texts").addClass("hidden");
			$("#example-textarea-changed").attr("disabled","yes");
			$("html, body").animate({ scrollTop: 0 }, 600);
			$("#restart-text").removeClass("hidden");
		}else{
			alert("Área restrita ao professor");
		}
	});
})

/* Mostrar Seletores */
$(document).ready(function(){
	$("#btn-start").click(function(){
		$(".container-select").removeClass("hidden");
		$("#btn-start").addClass("hidden");
	});
})

/* Animar Titulo */
$(document).ready(function(){
	$('.header-tittle').addClass('animated bounceInDown')
})

/* Mostrar textos */
$(document).ready(function(){
	$("#btn-start-text").click(function(){
		$("#start-text").addClass("hidden");
			$(".containers-text").removeClass("hidden");
			$("#exampleSelect1").attr("disabled","yes");
			$(".password").removeClass("hidden");
	});
})

/* Selecionar texto */
$(document).ready(function(){ 
	$("select").change(function () {
			var str = "";
		$( "select option:selected" ).each(function() {
 			str += $(this).text();
		});
		if(str == "Oscar"){
			text_defaul = texto1;
			$( "#example-textarea").text(texto1);
			$( "#example-textarea-changed").val("");
		}
		else if(str == "Alan Turing"){
			text_defaul = texto2;
			$( "#example-textarea").text(texto2);
			$( "#example-textarea-changed").val("");
		}
		else if(str == "Ada Lovelace"){
			text_defaul = texto3;
			$( "#example-textarea").text(texto3);
			$( "#example-textarea-changed").val("");
		}
		else if(str == "Isaac Newton"){
			text_defaul = texto4;
			$( "#example-textarea").text(texto4);
			$( "#example-textarea-changed").val("");
		}
		else{
			text_defaul = texto5;
			$( "#example-textarea").text(texto5);
			$( "#example-textarea-changed").val("");
		}
	}).change();
});