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

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


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
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
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
      <View>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderMovie}
          style={styles.listView}/>
      </View>
    );
  },

  renderMovie: function(movie) {
    return (
      <TouchableHighlight onPress={() => this.selectMovie(movie)}
        movie={movie}>
        <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  selectMovie: function(movie: Object) {
    this.props.navigator.push({
      title: movie.title,
      component: DetailScreen,
      passProps: {movie},
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  rightContainer: {
    flex: 1
  },
  listView: {
    paddingTop:10,
    backgroundColor: '#fff',
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
    height: 81,
    margin: 10
  },
});

module.exports = ListScreen;