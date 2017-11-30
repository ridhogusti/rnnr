import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { LoginScreen } from '../screens';
import Navigator from './Navigator';

class AppNavigator extends Component {
    state = { }
    render() {
      const navigation = addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      });

      if (this.props.user.logged) {
        return <LoginScreen />;
      }
      return <Navigator navigation={navigation} />;
    }
}

// export default AppNavigator;
export default connect(state => ({
  navigation: state.navigation,
  user: state.user,
}))(AppNavigator);

export const router = Navigator.router;
