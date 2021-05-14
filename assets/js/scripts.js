$(function(){

  // Código para que funcione el formulario importado de typeform
  //  Código de bootstrap para que funcione el tooltip
   $(function () {
       $('[data-toggle="tooltip"]').tooltip();
     });
     // Función para ocultar y mostrar el texto de las tarjetas al hacer click en el título de las tarjetas
   $('.card-title').click(function(){
       let dis=$('.card-text').css("display");
       if(dis==='block'){
           $('.card-text').hide();
       }
       else{
           $('.card-text').show();
       }
   });

   $(document).on('scroll', function(){
    // Cambiando el color del navbar al hacer scroll
    if ( $(window).scrollTop() > $('header').height()) {
      // Si el scroll es mayor al tamaño del header dejará de ser transparente
      //y cambiará el color de la letra también
        $('#nav-color').css("background-color",'#f5f6f5');
        $('#nav-color a').css("color",'#383534');
    } else {
      // Si está en el header vuelve a los valores iniciales
        $('#nav-color').css("background-color",'transparent');
        $('#nav-color a').css("color",'rgb(222, 221, 216)');
        
    }
});


  
     

});