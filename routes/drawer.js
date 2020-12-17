import { createAppContainer } from "react-navigation";

import { createDrawerNavigator } from "react-navigation-drawer";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import Review from '../screens/reviews'

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  },
  Review: {
    screen: Review
  }
})

export default createAppContainer(RootDrawerNavigator)