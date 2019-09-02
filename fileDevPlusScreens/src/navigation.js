import React, {Component} from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import homeInitial from './screens/homeInitial';
import homeThwo from './screens/homeThwo';
import homeTree from './screens/homeTree';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: homeInitial,
      },
      homeThwo: {
        screen: homeThwo,
      },
      homeTree: {
        screen: homeTree,
      },
    },
    {
      initialRouteName: 'Home',
    },
  ),
);

export default class navigation extends Component {
  render() {
    return <AppContainer />;
  }
}
