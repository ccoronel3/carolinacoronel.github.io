$.fn.idioma = function(idioma){

  //Obtenemos el archivo del idioma
  $.getJSON( "modulos/ccoronel3/js/idioma/"+idioma+".json", function( data ) {

    //Seteamos la traducciones
    $('#section-sobreMi').text(data.sobreMi);
    $('#section-infoProfesional').text(data.habilidades);
    $('#section-contacto').text(data.contactame);

    $('#ttl_AboutMe').text(data.ttl_AboutMe);

  });

}//Fin de la función $.fn.idioma()
