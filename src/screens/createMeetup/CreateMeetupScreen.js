import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Body, Title, Right, Container } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { connect } from 'react-redux';
import { createMeetup } from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/CreateMeetupScreen';
import { CreateMeetupForm } from './components';
import { LoadingScreen } from '../../commons';

class CreateMeetupScreen extends Component {
    static navigationOptions = {
      header: null,
    }
    
    state = {
      isDateTimePickerVisibile: false,
      date: moment(),
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisibile: true })

    _handleDateTimePicker = () => this.setState({ isDateTimePickerVisibile: false })

    _handleDatePicked = date => {
      this.setState({ date });
      this._handleDateTimePicker();
    }

    _checkTitle() {
      const { date } = this.state;
      if (date > moment()) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');
      }
      return 'Pick a meetup date';
    }

    _checkIfButtonSubmitDisabled() {
      const { date } = this.state;

      if (date > moment()) {
        return false;
      }
      return true;
    }

    _createMeetup = async values => {
      await this.props.createMeetup(values);
      this.props.navigation.goBack();
    }
    
    _renderHeader() {
      return (
        <Header style={{ backgroundColor: Colors.$redColor }}>
          <Left>
            <Icon name='close' size={30} style={{ color: Colors.$whiteColor }} onPress={() => this.props.navigation.goBack()} />
          </Left>
          <Body>
            <Title style={{ color: Colors.$whiteColor }}>Create a new Meetups</Title>
          </Body>
          <Right />
        </Header>
      );
    }

    render() {
      const { params } = this.props.navigation.state;
      const {
        meetup,
      } = this.props;
      if (meetup.loading) {
        return (
          <View>
            <LoadingScreen />
          </View>
        );
      } else if (meetup.error.on) {
        return (
          <View>
            <Text>{meetup.error.message}</Text>
          </View>
        );
      }
      return (
        <Container>
          {this._renderHeader()}
          <View style={styles.root}>
            <CreateMeetupForm
              {...this.props}
              params={params}
              createMeetup={this._createMeetup}
              showDateTimePicker={this._showDateTimePicker}
              checkTitle={this._checkTitle()}
            />
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisibile}
              onConfirm={this._handleDatePicked}
              onCancel={this._handleDateTimePicker}
              mode="datetime"
            />
          </View>     
        </Container>
        
      );
    }
}

// export default CreateMeetupScreen;

export default connect(state => ({
  meetup: state.createMeetup,
}), { createMeetup })(CreateMeetupScreen);
