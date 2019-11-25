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
    $(".city").html("<h1>" + response.name + " Weather Details---</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F) " + response.main.temp);

    ////////////////////////////////////////////Icon Call//////////////////////////////////////////////////
    var icon = response.weather[0].icon;
    var image = document.createElement("IMG");
    image.alt = "weather icon";
    image.setAttribute("class", "photo");
    image.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    $(".icon").html(image);
    ////////////////////////////////////////UVI Call///////////////////////////////////////////////////////////////
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var queryURLUVI =
      "http://api.openweathermap.org/data/2.5/uvi?&appid=" +
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
      "&mode=xml&appid=" +
      APIKey;
    $.ajax({
      url: queryURLFiveDay,
      method: "GET"
    }).then(function(fiveDay) {
      console.log("fiveDay", fiveDay);
    });
  });
});
