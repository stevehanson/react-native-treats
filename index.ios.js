/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Image,
  StyleSheet,
  ListView,
  NavigatorIOS,
  TabBarIOS,
  Text,
  View
} = React;

var ListScreen = require('./ListScreen');

var Treats = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Treats',
          component: ListScreen,
        }}
      />
    )
  }
});

var styles = {
  container: {
    backgroundColor: '#F5C515',
    containerBackgroundColor: 'red',
    flex: 1
  }
}

AppRegistry.registerComponent('Treats', () => Treats);