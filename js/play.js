"use strict";

$(function() {
    $("#playButton").click(function() {
        $("#playOutput").text($("#playInput").val());
    });

    // $(".songlist").mouseover( function (){
    //     $(this).css("font-weight","Bold");
    // });
    $(".songList").hover( function (){
        $(this).css({"font-weight": "Bold", "font-size": "20px"})
    });

   // $("#gsd").text());
})