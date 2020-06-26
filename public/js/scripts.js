// CODIGO PARA EL MENU
$(function(){
    var $toggleMenu = $('.toggle-menu');
    var $menu = $('.ed-menu');
    $toggleMenu.on('click',function(){
        $menu.toggleClass('mostrar');
    });
});

// CODIGO PARA LA VENTANA MODAL
$(document).ready(function(e) {
    var mozillaPresente = false,
        mozilla = (function detectarNavegador(navegador) {
        if(navegador.indexOf("Firefox") != -1 ) {
            mozillaPresente = true;
        }   
    })(navigator.userAgent);
    function darEfecto(efecto) {
        el = $('.cajainterna');
        el.addClass(efecto);
        el.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            el.removeClass(efecto);
        });
    }
    function mostrar(e) {
        $(".cajaexterna").show();
        darEfecto("pulse");      
    }
    function ocultar() {
        $(".cajaexterna").fadeOut("fast", function() {
            if(mozillaPresente) {
            setTimeout(function() {
                $(".cajainterna").removeClass("pulse");
            }, 5);
        }
        });         
    }

    $("a.mostrarmodal").click(mostrar);
    $("a.cerrarmodal").click(ocultar);
}); 

$(document).ready(function(e) {
    var mozillaPresente = false,
        mozilla = (function detectarNavegador(navegador) {
        if(navegador.indexOf("Firefox") != -1 ) {
            mozillaPresente = true;
        }   
    })(navigator.userAgent);
    function darEfecto(efecto) {
        el = $('.cajainternaeliminar');
        el.addClass(efecto);
        el.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            el.removeClass(efecto);
        });
    }
    function mostrareliminar(e) {
        $(".cajaexternaeliminar").show();
        darEfecto("pulse");      
    }
    function ocultareliminar() {
        $(".cajaexternaeliminar").fadeOut("fast", function() {
            if(mozillaPresente) {
            setTimeout(function() {
                $(".cajainternaeliminar").removeClass("pulse");
            }, 5);
        }
        });         
    }

    $("a.mostrarmodaleliminar").click(mostrareliminar);
    $("a.cerrarmodaleliminar").click(ocultareliminar);
}); 