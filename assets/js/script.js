$(document).ready(function () {
   
    var width = $(window).width();
    $(window).resize(function () {
        if (width <= '720') {
            $('#ulpag').addClass('.pagination-sm');
        }
    });
})
