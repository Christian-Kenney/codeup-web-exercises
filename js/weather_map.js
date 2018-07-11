var marker;
function initMap() {
    // "use strict";
    var mapCanvas = document.getElementById("map-canvas");
    var mapOptions = {
        zoom: 17,
        center: {
            lat: 29.520058,
            lng: -98.488035
        }
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var geo = new google.maps.Geocoder();

    geo.geocode({address: "76 NE Interstate 410 Loop, San Antonio, TX 78216"}, function(response, status) {

        if (status === "OK"){
            map.setCenter(response[0].geometry.location);

        }
        else{

        }
    });
    var image1 = {
        // url:"https://media.glassdoor.com/sqll/295508/pappadeaux-seafood-kitchen-squarelogo.png",
        scaledSize: new google.maps.Size(60,60)}

    marker = new google.maps.Marker({position:{
            lat: 29.519626,
            lng: -98.488149,
        },
        icon: image1,
        animation: google.maps.Animation.DROP,
        map: map});

    var infowindow = new google.maps.InfoWindow({
        content: "<ul><li>Tasty, Tasty food</li><li>Expensive</li></ul>"
    });

    marker.addListener("click", toggleBounce);
    marker.addListener("click", function(){
        infowindow.open(map,marker);
    });

}
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

$.get("http://api.openweathermap.org/data/2.5/forecast?id=4726206", {
    APPID: "dd53a99d50e0de24fe72f1520e7dfec4",
    id: 4726206,
    units: 'imperial'
}).done(function(data) {

    var dayMaxs = getMax(data);
    var dayMins = getMin(data);
    printStuff(dayMaxs, dayMins, data);
    function getMin(data){
        var dayMin = 200;
        var dayMins = [];
        var dayCounter = 0;
        for(var i = 0; i < 24; i++){
            if(data.list[i].dt_txt.charAt(11) == 0 && data.list[i].dt_txt.charAt(12) == 0 && i != 0){
                dayCounter++;
                dayMin = 200;
            }
            if(dayCounter === 3){
                return dayMins;
            }
            if(data.list[i].main.temp_min < dayMin){
                dayMins[dayCounter] = data.list[i].main.temp_min;
            }
        }
    }

    function getMax(data){
        var dayMax = 0;
        var dayMaxs = [];
        var dayCounter = 0;
        for(var i = 0; i < 24; i++){
            if(data.list[i].dt_txt.charAt(11) == 0 && data.list[i].dt_txt.charAt(12) == 0 && i != 0){
                // dayMaxs[dayCounter] = dayMax;
                dayCounter++;
                dayMax = 0;
            }
            if(dayCounter === 3){

                return dayMaxs;
            }
            if(data.list[i].main.temp_max > dayMax){
                // console.log(data.list[i].main.temp_max);
                // console.log(dayMax);
                dayMaxs[dayCounter] = data.list[i].main.temp_max;

            }
            // console.log(dayMaxs);
        }
    }
    function printStuff(max, min, data){
        console.log(data);
        var day = 0;
        for(var i = 0; i < max.length; i++){
        $('#days')
            .append('<div class="eachDay">' +
                "<a class=\"temp\">" + Math.round(max[i]) + " / " + "</a>"  +
                "<a class=\"temp\">" + Math.round(min[i]) + "</a>" + "<br />" +
                "<a class=\"weatherStatus\">" + data.list[i].weather[0].main + "</a>" + ": " +
                "<a class=\"weatherStatus\">" + data.list[i].weather[0].description + "</a>" + "<br />" +
                "<a class=\"humidity\">" + "Humidity: "+ data.list[day].main.humidity + "</a>" + "<br />" +
                "<a class=\"Wind\">" + "Wind: "+ data.list[day].wind.speed + "</a>" + "<br />" +
                "<a class=\"humidity\">" + "Humidity: "+ data.list[day].main.pressure + "</a>" + "<br />" + "<br />" +
                '</div>')
                ;
        day += 8;
        }
    }



});



