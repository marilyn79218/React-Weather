var axios = require('axios');

const myApiKey = 'c98e61f5786cf47a5dcafce49e33bdda';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${myApiKey}`;

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((response) => {
      // debugger;
      // console.log('response: ', response);
      if(response.data.cod && response.data.message) {
        return new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, (error) => {
      // debugger;
      // console.log('error: ', error.message);
      throw new Error(error.data.message);
    })
  },
};