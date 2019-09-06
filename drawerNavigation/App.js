import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {homeScreen, profile} from './src/screens';

export default createAppContainer(
  createDrawerNavigator({
    homeScreen,
    profile,
  }),
);
