    //-------------------------------------------------------------BUSCADOR---------------------------------------//
   function fnbuscar(){
        var input, filter, ul, li, h2, i;
        
        input = document.getElementById('searchText');
        filter = input.value.toUpperCase();
        ul = document.getElementById("lista");
        li = ul.getElementsByTagName('li');
        
        for(i=0; i<li.length; i++){
            h2=li[i].getElementsByTagName("h2")[0];
            if (h2.innerHTML.toUpperCase().indexOf(filter)>-1){
                li[i].style.display="";
            } else{
                li[i].style.display="none";
            }
        }
    
}
//CAPTURAR CON BOTON
/*function fncapturar(){
    var clase=$(this).attr('id');
    $(".lista ."+'clase').append('<h5 class="capturado">'+"Capturado"+'</h5>');
    console.log(clase);

}*/
$('#lista .pokemon').click(function(){
    var clase=$(this).attr('id');
    console.log(clase);
    $(clase).append('<h5 class="capturado">'+"Capturado"+'</h5>');
});
//------------------------------------------------------------------------------
//-----------------------------------------------FILTROS---------------------------------//

$('.imagen .filtro').click(function(){
    var catPoke=$(this).attr('category');
    
     //Agregando activo a enlace seleccionado
    $('.imagen .filtro').removeClass('filtro-activo');
    
    $(this).addClass('filtro-activo');
    
    
    if(catPoke=="Todos"){
        $('.pokemon').show();
    }
    else{
        //OCULTANDO Pokemon
    $('.pokemon').hide();
    
    //MOSTRANDO Pokemon
    $('.pokemon[category="'+catPoke+'"]').show();
    }
    
    console.log(catPoke);
   
    
    
});