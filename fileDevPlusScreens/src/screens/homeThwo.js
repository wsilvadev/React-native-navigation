import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

export default class homeThwo extends Component {
  render() {
    const nome = this.props.navigation.getParam('nome');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{fontSize: 50}}>
          <Image source={require('../assets/foto.jpeg')} />
        </View>
        <Text style={{fontSize: 50}}>{JSON.stringify(nome)}</Text>

        <View>
          <Button
            title="Terceira tela"
            onPress={() => this.props.navigation.navigate('homeTree')}
          />
        </View>
      </View>
    );
  }
}
