const getUserLocation = () =>
  fetch('https://ipapi.co/json/')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.statusText);
    });

export function getWeatherData() {
  const endpoint = 'https://api.apixu.com/v1/forecast.json?';
  const key = 'key=13e3751010cb4d9d946205535171506';
  const days = '&days=7';
  const apiUrl = endpoint + key + days;

  return getUserLocation().then((location) => {
    const city = `&q=${location.city}`;
    return fetch(apiUrl + city)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('ERROR while fetching!');
      })
      .catch(error => console.error(error));
  });
}

export function formatWeatherData(data, units) {
  let forecast = null;
  let current = null;

  if (units === 'metric') {
    forecast = data.forecast.forecastday.map((item) => {
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
    forecast = data.forecast.forecastday.map((item) => {
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

export function importAllImages(r) {
  const images = {};

  r.keys().forEach((item) => {
    images[item.match(/[a-z]+/i)] = r(item);
  });

  return images;
}
