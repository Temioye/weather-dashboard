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
