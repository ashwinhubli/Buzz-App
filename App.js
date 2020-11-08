import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import InstagramScreen from './screens/instagramScreen'
import FacebookScreen from './screens/facebookScreen'
import {Header} from 'react-native-elements'
export default function App() {
  return (
    <View style={styles.container}>
      <Header
          backgroundColor={'#FFB6C1'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
      <AppContainer/>  

  </View>
  );

}
const TabNavigator = createBottomTabNavigator({
  Instagram: InstagramScreen,
  Facebook: FacebookScreen,
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
