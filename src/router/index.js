import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import AddPost from '../screens/AddPost';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import { Icon } from 'react-native-elements';
import ViewPost from '../screens/ViewPost';
import HomeHeaderRight from '../components/HomeHeaderRight';
import HomeHeaderLeft from '../components/HomeHeaderLeft';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerRight: <HomeHeaderRight />,
      headerLeft: <HomeHeaderLeft />
    })
  },
  ViewPost: {
    screen: ViewPost
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" type="feather" size={28} color={tintColor} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" type="feather" size={28} color={tintColor} />
        )
      }
    },
    AddPost: {
      screen: AddPost,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="plus-circle" type="feather" size={28} color={tintColor} />
        )
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" type="feather" size={28} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" type="feather" size={28} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor: '#c2185b',
        inactiveTintColor: '#000',
        showLabel: false
      }
    }
  }
);

export default createAppContainer(TabNavigator);
