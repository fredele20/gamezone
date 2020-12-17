import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/Home'
import Review from '../screens/reviews'
import Header from "../shared/header";
import React from 'react'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='GameZone' />,
      }
    }
  },
  Review: {
    screen: Review
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'green',
      height: 80
    },
    headerTintColor: 'white'
  }
})

export default HomeStack