import React from 'react';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../../commons';
import { createMeetupValidations } from '../validations';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateMeetupForm';

const CreateMeetupForm = ({
  createMeetup,
  checkTitle,
  showDateTimePicker,
  handleSubmit,
  invalid,
  submitting,
}) => (
  <View style={styles.container}>
    <Field 
      component={TextInputWithValidations}
      name="title"
      label="Title"
      selectionColor={Colors.$redColor}
      containerStyle={styles.item}
    />
    <Field 
      component={TextInputWithValidations}
      name="description"
      label="Description"
      multiline
      selectionColor={Colors.$redColor}
      containerStyle={styles.item}
    />
    <View style={styles.item}>
      <Button
        raised
        title={checkTitle}
        onPress={showDateTimePicker}
      />
    </View>
    <View
      style={styles.buttonCreate}
    >
      <Button
        title="Create Meetup"
        raised
        // disabled={this._checkIfButtonSubmitDisabled()}
        // onPress={this._createMeetup}
        backgroundColor={Colors.$blackBlueColor}
        disabled={invalid || submitting}
        onPress={handleSubmit(createMeetup)}
      />
    </View>
  </View>
);

// export default CreateMeetupForm;
export default reduxForm({
  form: 'createMeetup',
  validate: createMeetupValidations,
})(CreateMeetupForm);
