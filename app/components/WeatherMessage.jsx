var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var { location, temperature } = this.props;
//     return (
//       <div>
//         <p>It's {temperature} in {location}</p>
//       </div>
//     );
//   }
// });

// Stateless functional component
var WeatherMessage = ({ location, temperature }) => {
  // var { location, temperature } = props;
  
  return (
    <div>
      <p>It's {temperature} in {location}</p>
    </div>
  );
};


module.exports = WeatherMessage;
