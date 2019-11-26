//////////////////////////////////Date Function//////////////////////////
$(document).ready(function() {
  let date = $(".date");
  let now = moment().format("MMM Do YY");
  date.text(now);
});

$("#findCity").on("click", function(event) {
  event.preventDefault();
  ////////////////////////////////////////////////////add new li from searches//////////////////////////
  function addLI() {
    var txtVal = document.getElementById("cityInput").value,
      listNode = document.getElementById("list"),
      liNode = document.createElement("li"),
      txtNode = document.createTextNode(txtVal);
    liNode.setAttribute("class", "list-group-item");
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
  }

  addLI();

  var city = $("#cityInput").val();
  console.log("blah", city);
  var APIKey = "089100f1dce99fc69ca132b28b1e31ea";
  var queryURLWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    APIKey;
  /////////////////////////////////////Main Weather Call///////////////////////////////////////////////
  $.ajax({
    url: queryURLWeather,
    method: "GET"
  }).then(function(response) {
    $(".city").text(response.name + " Weather Details---");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F) " + response.main.temp);
    console.log("weather", response);
    ////////////////////////////////////////////Icon Call//////////////////////////////////////////////////
    var icon = response.weather[0].icon;
    var image1 = document.createElement("IMG");
    image1.alt = "weather icon";
    image1.setAttribute("class", "photo");
    image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    $(".icon").html(image1);
    ////////////////////////////////////////UVI Call///////////////////////////////////////////////////////////////
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var queryURLUVI =
      "https://api.openweathermap.org/data/2.5/uvi?&appid=" +
      APIKey +
      "&lat=" +
      lat +
      "&lon=" +
      lon;
    $.ajax({
      url: queryURLUVI,
      method: "GET"
    }).then(function(UVI) {
      $(".uv").text("UVI Value: " + UVI.value);
    });
    ////////////////////////////////////////////Five Day Weather Call///////////////////////////////////////
    var queryURLFiveDay =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=" +
      APIKey;
    $.ajax({
      url: queryURLFiveDay,
      method: "GET"
    }).then(function(fiveDay) {
      console.log(fiveDay);
      //////////////////////////////Day 1 ////////////////////////////////////////////////////
      $(".card-title1").text(fiveDay.list[3].dt_txt);
      $(".temp1").text("Temp " + fiveDay.list[3].main.temp + " ºF");
      $(".humidity1").text("Humidity " + fiveDay.list[3].main.humidity + "%");
      var icon = fiveDay.list[3].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon1").html(image1);
      /////////////////////////Day 2 ////////////////////////////////////////////////
      $(".card-title2").text(fiveDay.list[11].dt_txt);
      $(".temp2").text("Temp " + fiveDay.list[11].main.temp + " ºF");
      $(".humidity2").text("Humidity " + fiveDay.list[11].main.humidity + "%");
      var icon = fiveDay.list[11].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon2").html(image1);
      ////////////////////////////Day 3 ///////////////////////////////////////////////////
      $(".card-title3").text(fiveDay.list[19].dt_txt);
      $(".temp3").text("Temp " + fiveDay.list[19].main.temp + " ºF");
      $(".humidity3").text("Humidity " + fiveDay.list[19].main.humidity + "%");
      var icon = fiveDay.list[19].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon3").html(image1);
      /////////////////////////////Day 4 ///////////////////////////////////////////////
      $(".card-title4").text(fiveDay.list[27].dt_txt);
      $(".temp4").text("Temp " + fiveDay.list[27].main.temp + " ºF");
      $(".humidity4").text("Humidity " + fiveDay.list[27].main.humidity + "%");
      var icon = fiveDay.list[27].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon4").html(image1);
      /////////////////////////Day 5 /////////////////////////////////////////////////
      $(".card-title5").text(fiveDay.list[35].dt_txt);
      $(".temp5").text("Temp " + fiveDay.list[35].main.temp + " ºF");
      $(".humidity5").text("Humidity " + fiveDay.list[35].main.humidity + "%");
      var icon = fiveDay.list[35].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon5").html(image1);
    });
  });
});

////////////////////////////Search Call on click////////////////////////
$("#list").on("click", "li", function() {
  var city1 = $(this).text();
  console.log("yo dawg!", city1);
  var APIKey = "089100f1dce99fc69ca132b28b1e31ea";
  var queryURLWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city1 +
    "&units=imperial&appid=" +
    APIKey;

  $.ajax({
    url: queryURLWeather,
    method: "GET"
  }).then(function(response) {
    $(".city").html(response.name + " Weather Details---");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F) " + response.main.temp);
    console.log("weather", response);
    ////////////////////////////////////////////Icon Call//////////////////////////////////////////////////
    var icon = response.weather[0].icon;
    var image1 = document.createElement("IMG");
    image1.alt = "weather icon";
    image1.setAttribute("class", "photo");
    image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    $(".icon").html(image1);
    ////////////////////////////////////////UVI Call///////////////////////////////////////////////////////////////
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var queryURLUVI =
      "https://api.openweathermap.org/data/2.5/uvi?&appid=" +
      APIKey +
      "&lat=" +
      lat +
      "&lon=" +
      lon;
    $.ajax({
      url: queryURLUVI,
      method: "GET"
    }).then(function(UVI) {
      $(".uv").text("UVI Value: " + UVI.value);
    });
    ////////////////////////////////////////////Five Day Weather Call///////////////////////////////////////
    var queryURLFiveDay =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city1 +
      "&units=imperial&appid=" +
      APIKey;
    $.ajax({
      url: queryURLFiveDay,
      method: "GET"
    }).then(function(fiveDay) {
      console.log(fiveDay);
      //////////////////////////////Day 1 ////////////////////////////////////////////////////
      $(".card-title1").text(fiveDay.list[3].dt_txt);
      $(".temp1").text("Temp " + fiveDay.list[3].main.temp + " ºF");
      $(".humidity1").text("Humidity " + fiveDay.list[3].main.humidity + "%");
      var icon = fiveDay.list[3].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon1").html(image1);
      /////////////////////////Day 2 ////////////////////////////////////////////////
      $(".card-title2").text(fiveDay.list[11].dt_txt);
      $(".temp2").text("Temp " + fiveDay.list[11].main.temp + " ºF");
      $(".humidity2").text("Humidity " + fiveDay.list[11].main.humidity + "%");
      var icon = fiveDay.list[11].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon2").html(image1);
      ////////////////////////////Day 3 ///////////////////////////////////////////////////
      $(".card-title3").text(fiveDay.list[19].dt_txt);
      $(".temp3").text("Temp " + fiveDay.list[19].main.temp + " ºF");
      $(".humidity3").text("Humidity " + fiveDay.list[19].main.humidity + "%");
      var icon = fiveDay.list[19].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon3").html(image1);
      /////////////////////////////Day 4 ///////////////////////////////////////////////
      $(".card-title4").text(fiveDay.list[27].dt_txt);
      $(".temp4").text("Temp " + fiveDay.list[27].main.temp + " ºF");
      $(".humidity4").text("Humidity " + fiveDay.list[27].main.humidity + "%");
      var icon = fiveDay.list[27].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon4").html(image1);
      /////////////////////////Day 5 /////////////////////////////////////////////////
      $(".card-title5").text(fiveDay.list[35].dt_txt);
      $(".temp5").text("Temp " + fiveDay.list[35].main.temp + " ºF");
      $(".humidity5").text("Humidity " + fiveDay.list[35].main.humidity + "%");
      var icon = fiveDay.list[35].weather[0].icon;
      var image1 = document.createElement("IMG");
      image1.alt = "weather icon";
      image1.setAttribute("class", "photo1");
      image1.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $(".icon5").html(image1);
    });
  });
});
