# Weather Dashboard

A five-day weather forecast app. Search for any city to see today's conditions and the next five days, and jump back to recent searches with one click.

**Live site:** https://temioye.github.io/weather-dashboard/

<img width="1344" alt="Weather Dashboard showing current conditions and a five-day forecast" src="https://user-images.githubusercontent.com/117649696/227564876-b3be748b-b4c3-497b-82c7-1ee6a0bd03a6.png">

## Features

- Current weather for any city: temperature, humidity and wind speed
- Five-day forecast cards
- Search history saved in the browser (localStorage), so past cities stay one click away

## Built with

- JavaScript and jQuery
- [OpenWeather API](https://openweathermap.org/api) (current weather and 5-day forecast endpoints)
- Moment.js for dates
- Bootstrap 4

## Run it locally

1. Clone the repo
2. Open `index.html` in your browser

## What I learned

- Making chained API calls (look up the city, then fetch its forecast) and working with the JSON that comes back
- Building page content from API data with JavaScript
- Persisting user data between visits with localStorage

## What I'd improve next

- Move the API key out of the front-end code
- Clearer error messages for misspelled or unknown cities
