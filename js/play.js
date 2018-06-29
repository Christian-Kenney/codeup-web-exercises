"use strict";

$(function() {
    $("#playButton").click(function() {
        $("#playOutput").text($("#playInput").val());
    });

    // $(".songlist").mouseover( function (){
    //     $(this).css("font-weight","Bold");
    // });
    $(".songList").hover( function (){
        $(this).css({"font-weight": "Bold", "font-size": "20px", "color": "black"})
    }, function(){
        $(this).css({"font-weight": "normal", "font-size": "15px", "color": "red"})
    });

    $("#header").click( function(){
        $(this).css('background-color', 'blue')
    })

    $("p").dblclick( function(){
        $(this).css('font-size', '30px')
    })
    $('body').keyup(function(e){
        var x = e.keycode
        console.log(e.key);
        console.log(x);
        console.log(e.keyCode);
        if(x == 38){
            console.log(x);
            // con
            // if(e.key === 'g'){
            //     alert('it worked');
            // }
            alert('it worked');
        }
    });

    $('input#q').keyup( function() {
        if( this.value === 'ArrowLeft' ) {
            /* code to run below */
            $('#output').val(this.value);
        }
    });

   // $("#gsd").text());
})