import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {profile} from '../screens';
import StructureStackNavigation from './structureNavigation';
// import { Container } from './styles';

const ProfileNavigations = createStackNavigator({
  Home: {
    screen: profile,
    navigationOptions: ({navigation}) => ({
      title: 'Tela perfil',
      headerLeft: <StructureStackNavigation navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    }),
  },
});

export default ProfileNavigations;
