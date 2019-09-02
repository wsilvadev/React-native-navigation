import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class homeTree extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 50}}>terceira pagina</Text>
        <View>
          <Button
            title="Voltar"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button
            title="Tela inicial"
            onPress={() => this.props.navigation.popToTop()}
          />
        </View>
      </View>
    );
  }
}
