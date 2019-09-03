import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import homeScreen from '../screens/homeScreen';
import profileScreen from '../screens/profileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: homeScreen,
      Profile: profileScreen,
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 35,
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'white',
        showLabel: false,
        style: {
          backgroundColor: 'blue',
        },
      },
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focuzed, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'md-home';
          } else if (routeName === 'Profile') {
            iconName = 'md-person';
          }
          return <IconComponent name={iconName} size={50} color={tintColor} />;
        },
      }),
    },
  ),
);
