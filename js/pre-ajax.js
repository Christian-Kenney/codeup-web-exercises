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
    $('#names-list').text("");
    for(var i = 0; i < people.length; i++){
        $('#names-list').append("<li style='color: " + people[i].favColor + "'>" + people[i].name + "</li>");
    }


});
