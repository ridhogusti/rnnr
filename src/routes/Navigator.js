import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import { CreateMeetupScreen, MeetupView } from '../screens';

export default StackNavigator({
  Home: { screen: HomeNavigator },
  CreateMeetup: { screen: CreateMeetupScreen },
  MeetupView: { screen: MeetupView },
}, {
  mode: 'modal',
});
