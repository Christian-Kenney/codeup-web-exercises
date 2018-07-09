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

// function buildList(arrObjs) {
//     var output = "";
//     output += "<ul>";
//     arrObjs.forEach(function(person) {
//         output += "<li style='color:"+ person.favColor + "'>" + person.name + "</li>";
//     });
//     output += "</ul>";
//     return output;
// }
//
// $('#add-names-btn').click(function() {
//     $('#names-list').html(buildList(people));
// });
