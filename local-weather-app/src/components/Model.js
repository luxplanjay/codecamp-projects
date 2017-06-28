import { map, forEach } from 'lodash';

export default function Model() {
  function getUserLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    });
  }

  function getWeatherData({ lat, lon }) {
    const endpoint = 'https://api.apixu.com/v1/';
    const resource = 'forecast.json?';
    const key = 'key=13e3751010cb4d9d946205535171506';
    const time = '&days=7';
    const location = `&q=${lat},${lon}`;
    const apiUrl = endpoint + resource + key + time + location;


    return fetch(apiUrl).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('ERROR while fetching!');
    }).catch(error => console.error(error));
  }

  function formatWeatherData(data, units) {
    let forecast = null;
    let current = null;

    if (units === 'metric') {
      forecast = map(data.forecast.forecastday, (item) => {
        const time = new Date(item.date);
        const day = time.toLocaleString('en-us', { weekday: 'long' }).slice(0, 3);
        const date = time.getDate();

        return {
          date: `${day} ${date}`,
          maxTemp: `${Math.round(item.day.maxtemp_c)}°`,
          minTemp: `${Math.round(item.day.mintemp_c)}°`,
          condition: item.day.condition.text,
          icon: `https:${item.day.condition.icon}`,
        };
      });
      current = {
        temp: `${Math.round(data.current.temp_c)}°`,
        lastUpdateTime: data.current.last_updated.match(/\b[0-9]+:[0-9]+$/),
        location: `${data.location.name}, ${data.location.country}`,
        condition: data.current.condition.text,
        feelsLike: `${Math.round(data.current.feelslike_c)}°`,
        wind: `${Math.round(data.current.wind_kph)} km/h, ${data.current.wind_dir}`,
        visibility: `${data.current.vis_km} km`,
        humidity: `${data.current.humidity}%`,
        icon: `https:${data.current.condition.icon}`,
      };
    } else if (units === 'imperial') {
      forecast = map(data.forecast.forecastday, (item) => {
        const time = new Date(item.date);
        const day = time.toLocaleString('en-us', { weekday: 'long' }).slice(0, 3);
        const date = time.getDate();

        return {
          date: `${day} ${date}`,
          maxTemp: `${Math.round(item.day.maxtemp_f)}°`,
          minTemp: `${Math.round(item.day.mintemp_f)}°`,
          condition: item.day.condition.text,
          icon: `https:${item.day.condition.icon}`,
        };
      });
      current = {
        temp: `${Math.round(data.current.temp_f)}°`,
        lastUpdateTime: data.current.last_updated.match(/\b[0-9]+:[0-9]+$/),
        location: `${data.location.name}, ${data.location.country}`,
        condition: data.current.condition.text,
        feelsLike: `${Math.round(data.current.feelslike_f)}°`,
        wind: `${Math.round(data.current.wind_mph)} mph, ${data.current.wind_dir}`,
        visibility: `${data.current.vis_miles} mi`,
        humidity: `${data.current.humidity} %`,
        icon: `https:${data.current.condition.icon}`,
      };
    }

    return {
      forecast,
      current,
    };
  }

  function importAllImages(r) {
    const images = {};

    forEach(r.keys(), (item) => {
      images[item.match(/[a-z]+/i)] = r(item);
    });

    return images;
  }

  function init() {
    return getUserLocation().then(location => getWeatherData({
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    }));
  }

  return {
    init,
    formatWeatherData,
    importAllImages,
  };
}
