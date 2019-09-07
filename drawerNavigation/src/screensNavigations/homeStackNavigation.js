import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import homeScreen from '../screens/homeScreen';
import StructureStackNavigation from './structureNavigation';
// import { Container } from './styles';

const screensNavigations = createStackNavigator({
  HomeScreen: {
    screen: homeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Tela inicial',
      headerLeft: <StructureStackNavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    }),
  },
});

export default screensNavigations;
