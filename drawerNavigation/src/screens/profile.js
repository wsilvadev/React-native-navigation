import React, {Component} from 'react';

import {View, Text, Button} from 'react-native';

// import { Container } from './styles';

export default class Profile extends Component {
  componentDidMount() {}
  static navigationOptions = {
    drawerLabel: 'profile',
  };

  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Tela Perfil</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Button
            title="menu"
            onPress={({navigation}) =>
              this.props.navigation.openDrawer() ||
              this.props.navigation.closeDrawer()
            }
          />
        </View>
      </View>
    );
  }
}
