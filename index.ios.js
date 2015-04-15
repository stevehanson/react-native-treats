/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var MOCKED_MOVIES_DATA = [
  {title: 'Star Wars: A New Hope', year: '1977', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Star Wars: Empire Strikes Back', year: '1980', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

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

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


var Treats = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'List',
          component: ListScreen,
        }}
      />
    )
  }
});

var styles = {
  container: {
    flex: 1
  }
}

AppRegistry.registerComponent('Treats', () => Treats);