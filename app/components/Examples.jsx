var React = require('react');
var { Link } = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

// Stateless functional component
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Taiwan">Taiwan</Link>
        </li>
        <li>
          <Link to="/?location=Japan">Japan</Link>
        </li>
      </ol>
    </div>
  );
};


module.exports = Examples;
