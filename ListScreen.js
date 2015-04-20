/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var DetailScreen = require('./DetailScreen')

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

//var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var REQUEST_URL = 'http://treats.10.0.1.42.xip.io/api/treats.json';

var ListScreen = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.treats),
          loaded: true,
        });
      })
      .done();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderTreat}
          style={styles.listView}/>
      </View>
    );
  },

  renderTreat: function(treat) {
    return (
      <TouchableHighlight onPress={() => this.selectTreat(treat)}
        treat={treat}>
        <View style={styles.treatContainer}>
          <Image
            source={{uri: treat.logo}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{treat.name}</Text>
            <Text style={styles.year}>{treat.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  selectTreat: function(treat: Object) {
    this.props.navigator.push({
      title: treat.name,
      component: DetailScreen,
      passProps: {treat},
    });
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  treatContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 10
  },
  rightContainer: {
    flex: 1
  },
  listView: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold'
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
  thumbnail: {
    width: 53,
    height: 53,
    margin: 10
  },
});

module.exports = ListScreen;