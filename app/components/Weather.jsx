var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMapApi = require('openWeatherMapApi');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
    }
  },
  handleSearchWeather: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
    });

    openWeatherMapApi.getTemp(location).then((temperature) => {
      that.setState({
        location,
        temperature,
        isLoading: false,
      });
    }, (errorMessage) => {
      this.setState({
        isLoading: false,
      });
      alert(errorMessage);
    });
  },
  render: function() {
    var { isLoading, location, temperature } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (location && temperature) {
        return <WeatherMessage location={location} temperature={temperature}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearchWeather}/>
        { renderMessage() }
      </div>
    );
  }
});

module.exports = Weather;
