//Variables
var APIKey = "cd8542d18f73261622c8d59475ca57c0";
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
var city;
var today = $("#today");
var forecast = $("#forecast");
var date = moment().format("MM/DD/YYYY");

//function for today's weather
function displayWeatherData(response) {
  var celsiusTemp = "Temp: " + (response.main.temp - 273.15).toFixed(2) + "°C";
  var windSpeed = "Wind: " + response.wind.speed + " KPH";
  var humidity = "Humidity " + response.main.humidity + "%";
  var todayCard = $("<div>").addClass("card bg-light border-dark");
  var todayCardBody = $("<div>").addClass("card-body text-dark p-2");
  var weatherIconUrl =
    "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
  var iconContainer = $("<div id='weather-icon'>").html(
    "<img src='" + weatherIconUrl + "' alt='Weather Icon'>"
  );
  var todayDateDisplay = $("<h5>").text(response.name + " (" + date + ")");
  todayCardBody.append(todayDateDisplay);
  todayCardBody.append(iconContainer);
  todayCardBody.append("<p>" + celsiusTemp + "</p>");
  todayCardBody.append("<p>" + windSpeed + "</p>");
  todayCardBody.append("<p>" + "Humidity: " + humidity + "</p>");
  todayCard.append(todayCardBody);
  today.empty();
  today.append(todayCard);
  displayForecast(response.id);
}
$("#search-button").on("click", function (event) {
  event.preventDefault();
  city = $("#search-input").val().trim();
  if (!city) {
    return;
  }
  if (searchHistory.includes(city)) {
    return;
  }
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(displayWeatherData);

  searchHistory.push(city);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  $("#search-input").val("");
  renderButtons();
});

function renderButtons() {
  $(".list-group").empty();
  for (var i = 0; i < searchHistory.length; i++) {
    var a = $("<button>");
    a.addClass("city btn-secondary");
    a.attr("data-name", searchHistory[i]);
    a.text(searchHistory[i]);
    $(".list-group").append(a);
  }
}

$(document).on("click", ".city", function () {
  var city = $(this).attr("data-name");
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(displayWeatherData);
});

renderButtons();
// Five day weather function
function displayForecast(cityID) {
  var forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?id=" +
    cityID +
    "&appid=" +
    APIKey;
  $.ajax({
    url: forecastURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    forecast.empty();