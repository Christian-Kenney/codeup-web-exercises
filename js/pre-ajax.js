"use strict";

$(document).ready(function() {

});

var people = [
    {
        name: "Fred",
        favColor: "red"
    },
    {
        name: "Sally",
        favColor: "blue"
    },
    {
        name: "Tom",
        favColor: "yellow"
    }
];
$('#add-names-btn').click(function(){
    for(var i = 0; i < people.length; i++){
        var nameOut = people[i].name;
        var colorr = people[i].favColor;
        $('#names-list').append("<li style='color: " + colorr + "'>" + nameOut + "</li>");

    }


});
