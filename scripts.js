$(document).ready(function(){
$("#button1").click(function(){
    const rodados1 = $("#descricao1").val();
    if(!rodados1)
    return; //clausula guarda
    var consumo1;
    var reais1;
    
  consumo1 = rodados1 / 10 * 2 ;
  reais1 =  consumo1 * 0.50;
  
  $("#consumoenergia").prepend(`<li>${consumo1}<li>`);
  $(consumo1).val();
  $("#consumoenergia").prepend(`<li>${reais1}<li>`);
  $(reais1).val();

})

$("#button2").click(function(){
    const rodados2 = $("#descricao2").val();
    if(!rodados2)
    return; //clausula guarda
    var consumo2;
    var reais2;
  consumo2 = rodados2 / 10;
  reais2 = consumo2 * 5;
    $("#gasolina").prepend(`<li>${consumo2}<li>`);
    $(consumo2).val();
    $("#gasreais").prepend(`<li>${reais2}<li>`);
    $(reais2).val();


})