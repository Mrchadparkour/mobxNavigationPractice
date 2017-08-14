import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search screen</Text>
      </View>
    )
  }
}

class Index extends React.Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Index screen</Text>
        <TouchableOpacity onPress={()=>navigate("Search", {"title": "Search"})}>
          <Text>Go to Search</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const AppNavigator = StackNavigator({
  Index: { screen: Index },
  Search: { screen: Search },
}, {
  initialRouteName: 'Index',
  navigationOptions: {
    header: ({state}) => {
      return {title: state.params && state.params.title}
    },
  },
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
