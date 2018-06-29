"use strict";

if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function(e){
        kkeys.push( e.keyCode );
        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
            alert('this worked');
            $('body').css('background-color', 'red');
            kkeys = [];
        }
    }, true);
}

if ( window.addEventListener ) {
    var kkeyss = [], konamii = "65,66,39,37,39,37,40,40,38,38";

    window.addEventListener("keydown", function(e){
        kkeyss.push( e.keyCode );
        if ( kkeyss.toString().indexOf( konamii ) >= 0 ) {
            alert('this worked twice');
            $('body').css('background-color', 'blue');
            kkeyss = [];
        }
    }, true);
}