export const APP = (function () {
  'use strict';

  const unitsBox = document.querySelector('.units-toggle'),
        metricBtn = document.querySelector('.metric-btn'),
        imperialBtn = document.querySelector('.imperial-btn'),
        tempBox = document.querySelector('.temp-box__value'),
        windSpeedBox = document.querySelector('.wind__speed'),
        page = document.querySelector('.wrapper'),
        iconBox = document.querySelector('.temp-box__icon'),
        locationBox = document.querySelector('.location'),
        weatherBox = document.querySelector('.weather'),
        images = {
          Thunderstorm: require('img/thunderstorm.jpg'),
          Drizzle: require('img/drizzle.jpg'),
          Rain: require('img/rain.jpg'),
          Snow: require('img/snow.jpg'),
          Clear: require('img/clear.jpg'),
          Clouds: require('img/clouds.jpg'),
          Fog: require('img/fog.jpg')
        };

  // $getWeather
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

    fetch(weatherApiUrl).then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).then(data => {
      const weatherData = {
        country: location.country,
        city: location.city,
        weather: data.weather[0].main,
        weatherDetails: data.weather[0].description,
        windSpeed: Math.round(data.wind.speed),
        windUnits: unitsObj.windUnits,
        windDirection: calcWindDirection(data.wind.deg),
        temp: data.main.temp,
        tempUnits: unitsObj.tempUnits,
        icon: data.weather[0].icon
      };

      updateUI(weatherData);
    }).catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }

  // $calcWindDirection
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

  // $getUnits
  function getUnits(countryCode) {
    const imperialCodes = ['US', 'BS', 'BZ', 'KY', 'PW'];

    if (imperialCodes.indexOf(countryCode) === -1) {
      return 'metric';
    }

    return 'imperial';
  }

  // $toggleUnits
  function toggleUnits(el) {
    let temp = 0,
        speed = 0;

    if (el.classList.contains('metric-btn') && !el.classList.contains('metric-btn--active')) {
      speed = (windSpeedBox.textContent).match(/[-.0-9]+/);
      speed = Math.round(speed / 2.237);
      windSpeedBox.textContent = `${speed} m/s`;

      temp = (tempBox.textContent).split(',').shift();
      temp = Math.round((temp - 32) / 1.8);
      tempBox.textContent = (`${temp}, °C`);

      metricBtn.classList.add('metric-btn--active');
      imperialBtn.classList.remove('imperial-btn--active');
    } else if (el.classList.contains('imperial-btn') && !el.classList.contains('imperial-btn--active')) {

      speed = (windSpeedBox.textContent).match(/[-.0-9]+/);
      speed = Math.round(speed / 0.44704);
      windSpeedBox.textContent = `${speed} mph`;

      temp = (tempBox.textContent).split(',').shift();
      temp = Math.round(temp * 1.8 + 32);
      tempBox.textContent = `${temp}, °F`;

      imperialBtn.classList.add('imperial-btn--active');
      metricBtn.classList.remove('metric-btn--active');
    }
  }

  // $updateUI
  function updateUI(data) {
    const windBoxChildren = document.querySelector('.wind').children,
          weatherIconUrl = `https://openweathermap.org/img/w/${data.icon}.png`;
    for (let key in images) {
      if (key === data.weather) {
        page.style = `background-image: url(${images[data.weather]})`;
        break;
      } else {
        page.style = 'background-color: #E8F1F2';
      }
    }

    if (data.tempUnits === '°C') {
      metricBtn.classList.add('metric-btn--active');
    } else {
      imperialBtn.classList.add('imperial-btn--active');
    }

    iconBox.style = `background-image: url(${weatherIconUrl})`;
    tempBox.textContent = `${data.temp}, ${data.tempUnits}`;
    locationBox.textContent = `${data.city}, ${data.country}`;
    weatherBox.textContent = `${data.weather}, ${data.weatherDetails}`;

    windBoxChildren[0].innerHTML = `${data.windDirection},&nbsp;`;
    windBoxChildren[1].innerHTML = `${data.windSpeed} ${data.windUnits}`;
  }

  // $init
  function init () {
    fetch('https://ipapi.co/json/').then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).then(data => {
      const currentLocation = {
        city: data.city,
        country: data.country_name,
        countryCode: data.country
      };

      getWeather(currentLocation);
    }).catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });

    unitsBox.addEventListener('click', event => {
      toggleUnits(event.target);
    });
  }

  return {
    init: init
  };
})();
