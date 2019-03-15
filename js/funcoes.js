//Verificando opção selecionada
$(document).on("click", "#enviar", function(){
   var selecao = $("#selecao").val();//pega o valor do select
   
   if (selecao == "1"){
       document.formulario.action = "exercicio.php";
       //document.formulario.submit();
   }
   else if (selecao == "2"){
       document.formulario.action = "#";
       //document.formulario.submit();
   }
   else{
       document.formulario.action = "#";
       //document.formulario.submit();
   }
   
});