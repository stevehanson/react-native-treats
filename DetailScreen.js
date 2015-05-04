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
        <Text style={styles.downloadItemHeading}>Past Builds</Text>
        <View style={styles.downloadList}>
          <View style={styles.downloadItem}>
            <Text style={styles.downloadItemText}>Build 1.0.7</Text>
            <TouchableHighlight style={styles.smallButton} onPress={this.handlePress}>
              <Text style={styles.smallButtonText}>
                Download Latest Build
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.downloadItem}>
            <Text style={styles.downloadItemText}>Build 1.0.6</Text>
            <TouchableHighlight style={styles.smallButton} onPress={this.handlePress}>
              <Text style={styles.smallButtonText}>
                Download Latest Build
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.downloadItem}>
            <Text style={styles.downloadItemText}>Build 1.0.5</Text>
            <TouchableHighlight style={styles.smallButton} onPress={this.handlePress}>
              <Text style={styles.smallButtonText}>
                Download Latest Build
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  },

  handlePress: function() {
    React.LinkingIOS.openURL(this.props.treat.url);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
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
    backgroundColor: '#fff',
    color: '#007AFF',
    marginTop: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 3
  },
  smallButton: {
    backgroundColor: '#fff',
    color: '#007AFF',
    fontSize: 15,
    marginTop: 15,
    padding: 3,
    borderRadius: 3,
    flex: 1
  },
  smallButtonText: {
    color: '#007AFF',
    fontSize: 13
  },
  text: {
    padding: 30
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 18
  },
  downloadItemHeading: {
    fontSize: 22,
    marginTop: 25,
    marginBottom: 20
  },
  downloadItemText: {
    fontSize: 16,
    flex: 1
  },
  downloadItem: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  downloadList: {

  }
});

module.exports = DetailScreen;