var React = require('react-native');
var { PropTypes } = React;

var Variant = React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  },

  render() {
    return this.props.children;
  },

  getName() {
    return this.props.name;
  },

  isVariant: true
});

module.exports = Variant;
