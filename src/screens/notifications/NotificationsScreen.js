import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../constants/Colors';

class NotificationsScreen extends Component {
    static navigationOptions = {
      headerStyle: {
        backgroundColor: Colors.$redColor,
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bell" size={25} color={tintColor} />
      ),
    }
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Text>NotificationsScreen</Text>
        </View>
      );
    }
}

export default NotificationsScreen;
