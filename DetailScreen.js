/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Button = require('react-native-button');

var {
  AppRegistry,
  Image,
  StyleSheet,
  ListView,
  NavigatorIOS,
  TabBarIOS,
  Text,
  TouchableHighlight,
  View
} = React;

var DetailScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.treat.logo}} style={styles.appIcon}
        />
        <Text style={styles.title}>{this.props.treat.name}</Text>
        <Text style={styles.description}>{this.props.treat.description}</Text>
        <TouchableHighlight style={styles.button} onPress={this.handlePress}>
          <Text style={styles.buttonText}>
            Download Latest Build
          </Text>
        </TouchableHighlight>

        <View style={{flex: 1, backgroundColor: '#333', height: 1}} />
      </View>
    );
  },

  handlePress: function() {
    alert('press');
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 80,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  appIcon: {
    width: 150,
    height: 150,
    margin: 10
  },
  description: {
    fontSize: 16,
    padding: 10
  },
  title: {
    color: 'black',
    fontSize: 24,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    marginTop: 15,
    padding: 15,
    borderRadius: 3
  },
  text: {
    padding: 30
  },
  buttonText: {
    color: '#fff',
  }
});

module.exports = DetailScreen;