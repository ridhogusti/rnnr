import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Header, Left, Body, Title, Right, Container, Content } from 'native-base';
import { LoadingScreen } from '../../commons';
import styles from './styles/HomeScreen';
import { MyMeetupsList } from './components';
import Colors from '../../../constants/Colors';
import { fetchMyMeetups } from './actions';

class HomeScreen extends Component {
    static navigationOptions = {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      ),
    }
    componentDidMount() {
      this.props.fetchMyMeetups();
    }
    _renderHeader() {
      return (
        <Header style={{ backgroundColor: Colors.$redColor }}>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button
              transparent 
              onPress={() => this.props.navigation.navigate('CreateMeetup')}
            >
              <Icon name="add-circle" style={{ fontSize: 30, color: Colors.$whiteColor }} />
            </Button>
          </Right>
        </Header>
      );
    }
    render() {
      const {
        myMeetups: {
          isFetched,
          data,
          error,
        },
        navigation,
      } = this.props;
      if (!isFetched) {
        return <LoadingScreen />;
      }
      return (
        <Container>
          {this._renderHeader()}
          <View style={styles.root}>
            <View style={styles.topContainer}>
              <Text>HomeScreen</Text>
            </View>
            <View style={styles.bottomContainer}>
              <MyMeetupsList
                meetups={data}
                navigation={navigation}
              />
            </View>
          </View>
        </Container>
        
      );
    }
}

// export default HomeScreen;
export default connect(state => ({
  myMeetups: state.home.myMeetups,
}), { fetchMyMeetups })(HomeScreen);
