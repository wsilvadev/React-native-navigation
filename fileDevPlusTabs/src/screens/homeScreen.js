import React, {Component} from 'react';

import {View, Text} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Home</Text>
        </View>
      </View>
    );
  }
}
