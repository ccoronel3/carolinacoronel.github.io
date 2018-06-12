//Variables globales
var alto = 0;
var ancho = 0;

$(document).ready(() => {

  $.fn.idioma('es');

  //Seteamos las siguientes variables
  alto = $(window).height();
  ancho =  $(window).width();

  $.fn.inicio();

  //Para los tooltips
  $('[data-toggle="tooltip"]').tooltip();

  //Evento scroll sobre la ventana
  $(window).resize(() => {

    //Removemos los tooltips activos
    $('.tooltip').remove();

    //Seteamos las siguientes variables
    alto = $(window).height();
    ancho =  $(window).width();

    $.fn.inicio();

  });

  //Evento scroll sobre la ventana
  $(window).scroll(() => {

    //Removemos los tooltips activos
    $('.tooltip').remove();

    //Obtenemos la distancia del top
    var top = $(document).scrollTop();

    //Evaluamos si reposicionamos
    (top > (alto - 200)) ? $('#menu_principal').addClass('scrollOn') : $('#menu_principal').removeClass('scrollOn');

  });

  $('.idiomas').popover({
    container: 'body',
    content: `<div class="bandera"><img src="modulos/ccoronel3/images/ve-icon.png" cod="es"></div>
              <div class="bandera"><img src="modulos/ccoronel3/images/us-icon.png" cod="en"></div>`,
    html: true,
    placement: 'bottom'
  })

  $('.idiomas').on('shown.bs.popover', function () {

    $('.bandera img').on('click', (e) => {

      let codLang = $(e.target).attr('cod');
      let src     = $(e.target).attr('src');
      $('.flag img').attr('src',src);

      $.fn.idioma(codLang);

      $('.idiomas').popover('hide');

    })

  })

  $.fn.eventos();

});//Fin del document ready

/*
  Función donde se declaran todos los eventos
*/
$.fn.eventos = () => {

  /*
    Evento click sobre .navbar-brand
  */
  $('.navbar-brand').unbind('click');
  $('.navbar-brand').click(() => {

    //Evaluamos el dispositivo
    if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){

      setTimeout(() => {

        window.scrollTo(0,0);

      }, 700);

    }else{

      $("html")
      .animate({ scrollTop: 0}, 700);

    }//Fin del if

    $.fn.eventos();

  });//Fin del evento click
  /***********************/

  /*
    Evento click sobre el link #itemsMenuPrincipal
  */
	$('#itemsMenuPrincipal .nav-link').unbind('click');
	$('#itemsMenuPrincipal .nav-link').click((e) => {

    //Obtenemos el id
    let id = $(e.target).attr('id');

    switch(id){

      case 'section-sobreMi': var top = $('#sobre-mi').offset().top - 60;
                              break;

      case 'section_habilidades': var top = $('#skills').offset().top - 60;
                                  break;

      case 'section_experiencia': var top = $('#experiencia').offset().top - 60;
                                  break;

      case 'section_certificados': var top = $('#certificados').offset().top - 60;
                                   break;

    }//Fin del switch

    //Evaluamos el dispositivo
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){

      setTimeout(() => {

        window.scrollTo(0,top);

      }, 700);

    }else{

      $("html")
      .animate({ scrollTop: top}, 700);

    }//Fin del if

		$.fn.eventos();

	});//Fin del evento click
  /***********************/

  /*
    Evento click sobre .modal_certificado
  */
  $('.modal_certificado').unbind('click');
  $('.modal_certificado').click(function(){

    //Obtenemos el id
    var id = $(this).attr('id');

    $.fn.modal_certificado(id);

    $.fn.eventos();

  });//Fin del evento click
  /***********************/

};//Fin de la función $.fn.eventos

/*
  Función que se encarga de la modificación del inicio
*/
$.fn.inicio = () => {

  $('#inicio').height(alto);

}//Fin $.fn.inicio
/****************/

/*
  Función que arma la modal para mostrar los certificados
*/
$.fn.modal_certificado = function(id){

  switch(id){

    case 'certificado1': var img = '<img src="modulos/dmolina101/images/certificados/2.jpg" class="img-fluid">';
                         break;

    case 'certificado2': var img = '<img src="modulos/dmolina101/images/certificados/3.jpg" class="img-fluid">';
                        break;

    case 'certificado3': var img = '<img src="modulos/dmolina101/images/certificados/4.jpg" class="img-fluid">';
                         break;

    case 'certificado4': var img = '<img src="modulos/dmolina101/images/certificados/10.jpg" class="img-fluid">';
                         break;

    case 'certificado5': var img = '<img src="modulos/dmolina101/images/certificados/5.jpg" class="img-fluid">';
                         break;

  }//Fin switch

  var modal = `<div class="modal fade" id="modal_certificado" tabindex="-1" role="dialog" aria-hidden="true">
      				  <div class="modal-dialog" role="document">
      					<div class="modal-content">
      					  <div class="modal-header">
      						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
      						  <span aria-hidden="true">&times;</span>
      						</button>
      					  </div>
      					  <div class="modal-body">
                    `+img+`
      					  </div>
      					  <div class="modal-footer"></div>
      					</div>
      				  </div>
      				</div>`;

    //Agregamos la modal al body
	$('body').append(modal);

	//Opciones de la modal
	$('#modal_certificado').modal({backdrop : 'static'})

  //Evento cuando se cierre la modal
	$('#modal_certificado').on('hidden.bs.modal', function(e){

		$(this).remove();

	});

  //Mostramos la modal
	$('#modal_certificado').modal('show');

};//Fin de la función modal_certificado
