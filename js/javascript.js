$(document).ready(function(){ /*CARGA PRIMERO EL HTML Y DESPUES CORRE EL SRIPT*/
    //LEE URL JSON
 $.getJSON("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", function(datos){
     //IMPRIME JSON
     $.each(datos.pokemon,function( i, items){
         $('#lista').append('<li class="pokemon '+items.name+'" id="capturar" category="'+items.type+'">'+ 
                            '<h2>'+items.name +'</h2>'+
                            '<img class="pokemon-img" src="'+items.img +'" alt="'+ items.name+'"/>'+
                            '<h3>'+"Type: "+items.type+'</h4>'+
                            '<h4 class="new-tab">'+"Height: "+items.height+'</h6>'+
                            '<h4 class="new-tab">'+"Weight: "+items.weight+'</h6>'+
                            '<h4 class="new-tab">'+"Candy: "+items.candy+'</h6>'+
                            '<h4 class="new-tab">'+"Candy Count: "+items.candy_count+'</h6>'+
                            '<h4 class="new-tab">'+"Egg: "+items.egg+'</h6>'+
                            '<h4 class="new-tab">'+"Spawn Chance: "+items.spawn_chance+'</h6>'+
                            '<h4 class="new-tab">'+"AVG Spawns: "+items.avg_spawns+'</h6>'+
                            '<h4 class="new-tab">'+"Spawn Time: "+items.spawn_time+'</h6>'+
                            '<h4 class="new-tab">'+"Multipliers: "+items.multipliers+'</h6>'+
                            '<h4 class="new-tab">'+"Weaknesses: "+items.weaknesses+'</h6>'+
                            '<h4 class="new-tab">'+"Multipliers: "+items.multipliers+'</h6>'+
                            '<h4 class="new-tab">'+"Previous Evolution: "+items.prev_evolution+'</h6>'+
                            '<h4 class="new-tab">'+"Next Evolution: "+items.next_evolution+'</h6>'+                            
                            '<button type="button" class="boton-capturar" id="'+items.name+'" onclick="fncapturar()">Capturar</button>'+
                            '</li>'
                           
                           );
         
         
         
        
         
     });
     
 }); 

    
});

