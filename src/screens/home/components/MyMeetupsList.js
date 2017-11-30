import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles/MyMeetupList';

const MyMeetupsList = ({ meetups, navigation }) => (
  <View style={styles.root}>
    <View style={styles.titleContianer}>
      <Text style={styles.title}>My Meetups</Text>
    </View>
    <View>
      <ScrollView horizontal>
        {
          meetups.map((meetup, i) => (
            <View key={i} style={styles.meetupCard}>
              <View style={styles.meetupCardTopContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MeetupView', { id: meetup.id, title: meetup.title, description: meetup.description })}
                >
                  <Text
                    style={styles.meetupCardTitle}
                  >
                    {meetup.title}
                  </Text>
                </TouchableOpacity>

              </View>
              <View style={styles.meetupCardBottomContainer}>
                <Text style={styles.meetupCardMetaName}>
                  {meetup.description}
                </Text>
                <Text style={styles.meetupCardMetaDate}>
                Mar 2m 6:00pm
                  {meetup.date}
                </Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  </View>
);

export default MyMeetupsList;
