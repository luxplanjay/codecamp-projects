$(document).ready(function () {
  'use strict';

  $.getJSON('https://ipapi.co/json/')
    .then(function (response) {
      const currentLocation = {
        city: response.city,
        country: response.country_name,
        countryCode: response.country
      };

      getWeather(currentLocation);
    });

  $('.units-toggle').on('click', function (e) {
    toggleUnits(e.target);
  });

  function toggleUnits(el) {
    let metricBtn = $('.metric-btn'),
      imperialBtn = $('.imperial-btn'),
      tempBox = $('.temp-box__value'),
      windSpeedBox = $('.wind__speed'),
      temp = 0,
      speed = 0;

    if ($(el).hasClass('metric-btn') && !$(el).hasClass('metric-btn--active')) {
      speed = (windSpeedBox.html()).match(/[-.0-9]+/);
      speed = Math.round(speed / 2.237);
      windSpeedBox.html(`${speed} m/s`);

      temp = tempBox.html().split(',').shift();
      temp = Math.round((temp - 32) / 1.8);
      tempBox.html(`${temp}, °C`);

      metricBtn.addClass('metric-btn--active');
      imperialBtn.removeClass('imperial-btn--active');
    } else if ($(el).hasClass('imperial-btn') && !$(el).hasClass('imperial-btn--active')) {

      speed = (windSpeedBox.html()).match(/[-.0-9]+/);
      speed = Math.round(speed / 0.44704);
      windSpeedBox.html(`${speed} mph`);

      temp = tempBox.html().split(',').shift();
      temp = Math.round(temp * 1.8 + 32);
      tempBox.html(`${temp}, °F`);

      imperialBtn.addClass('imperial-btn--active');
      metricBtn.removeClass('metric-btn--active');
    }
  }

  function getWeather(location) {
    let units = getUnits(location.countryCode),
      unitsObj = {},
      weatherApiUrl = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.countryCode}&units=${units}&appid=e2db5b0453a25a492e87ad8b03046a7c`;


    if (units === 'metric') {
      unitsObj.tempUnits = '°C';
      unitsObj.windUnits = 'm/s';
    } else {
      unitsObj.tempUnits = '°F';
      unitsObj.windUnits = 'mph';
    }

    $.getJSON(weatherApiUrl, function (response) {
      console.log(response);
      const weatherData = {
        country: location.country,
        city: location.city,
        weather: response.weather[0].main,
        weatherDetails: response.weather[0].description,
        windSpeed: Math.round(response.wind.speed),
        windUnits: unitsObj.windUnits,
        windDirection: calcWindDirection(response.wind.deg),
        temp: response.main.temp,
        tempUnits: unitsObj.tempUnits,
        icon: response.weather[0].icon
      };

      updateUI(weatherData);
    });
  }

  function calcWindDirection(degrees) {
    let windDirection = '';

    switch (true) {
      case degrees > 0 && degrees < 90:
        windDirection = 'NE';
        break;
      case degrees === 90:
        windDirection = 'E';
        break;
      case degrees > 90 && degrees < 180:
        windDirection = 'SE';
        break;
      case degrees === 180:
        windDirection = 'S';
        break;
      case degrees > 180 && degrees < 270:
        windDirection = 'SW';
        break;
      case degrees === 270:
        windDirection = 'W';
        break;
      case degrees > 270 && degrees < 360:
        windDirection = 'NW';
        break;
      case degrees === 0 || degrees === 360:
        windDirection = 'N';
        break;
      default:
        windDirection = 'no wind direction data';
    }

    return windDirection;
  }

  function updateUI(data) {
    const page = $('.wrapper'),
      tempBox = $('.temp-box__value'),
      iconBox = $('.temp-box__icon'),
      locationBox = $('.location'),
      weatherBox = $('.weather'),
      windBoxChildren = $('.wind').children(),
      weatherIconUrl = `https://openweathermap.org/img/w/${data.icon}.png`,
      metricBtn = $('.metric-btn'),
      imperialBtn = $('.imperial-btn');

    const images = {
      Thunderstorm: 'img/thunderstorm.jpg',
      Drizzle: 'img/drizzle.jpg',
      Rain: 'img/rain.jpg',
      Snow: 'img/snow.jpg',
      Clear: 'img/clear.jpg',
      Clouds: 'img/clouds.jpg',
      Fog: 'img/fog.jpg'
    };

    for (let key in images) {
      if (key === data.weather) {
        page.css({'background-image': `url(${images[data.weather]})`});
      } else {
        page.css({'background-color': '#E8F1F2'});
      }
    }

    if (data.tempUnits === '°C') {
      metricBtn.addClass('metric-btn--active');
    } else {
      imperialBtn.addClass('imperial-btn--active');
    }

    iconBox.css({'background-image': `url(${weatherIconUrl})`});
    tempBox.html(`${data.temp}, ${data.tempUnits}`);
    locationBox.html(`${data.city}, ${data.country}`);
    weatherBox.html(`${data.weather}, ${data.weatherDetails}`);

    $(windBoxChildren[0]).html(`${data.windDirection},&nbsp;`);
    $(windBoxChildren[1]).html(`${data.windSpeed} ${data.windUnits}`);
  }

  function getUnits(countryCode) {
    const imperialCodes = ['US', 'BS', 'BZ', 'KY', 'PW'];

    if (imperialCodes.indexOf(countryCode) === -1) {
      return 'metric';
    }

    return 'imperial';
  }

});
