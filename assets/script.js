//Variables
var APIKey = "cd8542d18f73261622c8d59475ca57c0";
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
var city;
var today = $("#today");
var forecast = $("#forecast");
var date = moment().format("MM/DD/YYYY");
