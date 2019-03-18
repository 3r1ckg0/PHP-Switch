//Verificando opção selecionada
/*$(document).on("submit", "#enviar", function(){
   
   var selecao = $("#selecao").on("change");
   
   if (selecao != ""){
      
      //Redirecionando o usuário para a página selecionada
      if (selecao == "1"){
         document.formulario.action = "exercicio1.php";
      }
      else if (selecao == "2"){
         document.formulario.action = "exercicio2.php";
      }
      else{
         document.formulario.action = "exercicio3.php";
      }
   }
   
});*/

function verificaSelecao(){
   
   var selecao = $("#selecao").val();
   
   if (selecao != ""){
      
      //Redirecionando o usuário para a página selecionada
      if (selecao == "1"){
         document.formulario.action = "exercicio1.php";
      }
      else if (selecao == "2"){
         document.formulario.action = "exercicio2.php";
      }
      else{
         document.formulario.action = "exercicio3.php";
      }
   }
}