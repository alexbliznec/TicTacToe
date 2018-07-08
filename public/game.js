'use strict'
// Недоделанная логика для доски
$(document).ready(function() {
    $("#button").click(function() {
        getColor()
    })
});

function getColor() {
    var squard = $("#squard1");

    $.get( "api/color", function( data ) {
        squard.css('background-color', data);
      });
}
