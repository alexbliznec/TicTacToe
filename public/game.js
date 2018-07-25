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

$(document).ready(function() {
    $("#newButton").click(function() {
        changeColor();
    })
});

function changeColor() {
    const nextBox = $("#nextBox");

    $.get( "api/changeColor", function( data ) {
        nextBox.css('background-color', data);
      });
}

$(document).ready(function() {
    $("#register").click(function() {
        showData();
    })
});

function showData (){
   // const data = $("")
}