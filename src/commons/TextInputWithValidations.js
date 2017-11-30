import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';

import Colors from '../../constants/Colors';

const TextInputWithValidations = ({
  input,
  containerStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <View>
    <FormLabel>
      {label}
    </FormLabel>
    <FormInput
      {...input}
      {...custom}
    />
    {
      error && touched &&
        <FormValidationMessage labelStyle={{ color: Colors.$redColor }}>
          {error}
        </FormValidationMessage>
    }
  </View> 
);

export default TextInputWithValidations;
