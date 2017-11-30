import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../constants/Colors';

class ProfileScreen extends Component {
    static navigationOptions = {

      headerStyle: {
        backgroundColor: Colors.$redColor,
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={25} color={tintColor} />
      ),
    }
    state = { }
    render() {
      return (
        <View>
          <Text>ProfileScreen</Text>
        </View>
      );
    }
}

export default ProfileScreen;
