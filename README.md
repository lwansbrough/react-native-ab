# react-native-ab

A component for rendering A/B tests in React Native.

## Getting started

1. `npm install react-native-ab@latest --save`

## Obtaining your metrics

Once you've got your A/B tests set up, you'll need a place to send the data. Check out these libraries for A/B testing:

- [Google Analytics (react-native-google-analytics)](http://github.com/lwansbrough/react-native-google-analytics)

## Usage

All you need is to `require` the `react-native-ab` module and then use the provided tags (`<Experiment>`, and `<Variant>`).

```javascript

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;
var { Experiment, Variant } = require('react-native-ab');

var rnabtest = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._resetExperiment}>
          <View>
            <Experiment
              ref="welcomeExperiment"
              name="welcome-message"
              onChoice={(test, variant) => console.log(test, variant)}
            >
              <Variant name="standard">
                <Text style={styles.welcome}>
                  Welcome to React Native!
                </Text>
              </Variant>
              <Variant name="friendly">
                <Text style={styles.welcome}>
                  Hey there! Welcome to React Native!
                </Text>
              </Variant>
              <Variant name="western">
                <Text style={styles.welcome}>
                  Howdy, partner! This here is React Native!
                </Text>
              </Variant>
            </Experiment>
          </View>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  },

  _resetExperiment() {
    this.refs.welcomeExperiment.reset();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnabtest', () => rnabtest);
```

## `<Experiment>` Properties

#### `name`

The name of your experiment, for example `"welcome-message"`.


#### `choose`

Example callback signature: `function(variants)`
Must return an instance of `Variant`

A function which should use a randomization algorithm to pick one of your variants. Defaults to a random selection using `Math.random()`

#### `onChoice`

Example callback signature: `function(experimentName, variantName)`

Called when a `Variant` has been chosen for your `Experiment`.

#### `onRawChoice`

Example callback signature: `function(experiment, variant)`

Same as `onChoice`, but the objects passed are React component instances.

## `<Experiment>` methods

You can access component methods by adding a `ref` (ie. `ref="welcomeExperiment"`) prop to your `<Experiment>` element, then you can use `this.refs.welcomeExperiment.reset()`, etc. inside your component.

#### `reset()`

Resets the experiment. The next time the experiment is rendered, a new variant may be chosen.

#### `getActiveVariant()`

Returns the currently displayed `Variant`.

#### `getVariant(variantName)`

Returns the instance of the specified `Variant` name.

## `<Variant>` Properties

#### `name`

The name of your variant, for example `"western"`.

## Subviews
Only the `Variant` tag element exist within the `Experiment` element. `Variant` tags can contain only one *root* element.
