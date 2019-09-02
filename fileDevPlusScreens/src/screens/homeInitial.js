import React, {Component} from 'react';

import {View, Text, Button} from 'react-native';

export default class homeInitial extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 50}}>Pagina inicial</Text>
        <View>
          <Button
            title="Segunda tela"
            onPress={() =>
              this.props.navigation.navigate('homeThwo', {nome: 'Willian'})
            }
          />
        </View>
      </View>
    );
  }
}
