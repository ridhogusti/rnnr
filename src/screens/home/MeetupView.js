import React, { Component } from 'react';
import { ListItem, List, Body, Text } from 'native-base';
import { TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchMyMeetups } from './actions';

class MeetupView extends Component {
// static navigationOptions = ({ navigation }) => ({
  //   title: `Chat with ${navigation.state.params.title}`,
  // })

  handleDelete(id) {
    axios.delete(`http://rest.learncode.academy/api/ridhogusti/meetups/${id}`)
      .then(() => {
        this.props.dispatch(fetchMyMeetups());
        this.props.navigation.goBack();
      });
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <ListItem>
        <Body>
          <Text>{params.id}</Text>
          <Text>{params.title}</Text>
          <Text>{params.description}</Text>
        </Body>
        <TouchableOpacity
          style={{ borderWidth: 9, padding: 6, backgroundColor: 'red' }}
          onPress={() => this.handleDelete(params.id)}
        >
          <Text>Delete bro</Text>
        </TouchableOpacity>

      </ListItem>       
    );
  }
}

// export default MeetupView;

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(MeetupView);
