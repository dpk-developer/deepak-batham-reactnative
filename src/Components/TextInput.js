import React from 'react';
import { TextInput as Input, StyleSheet } from 'react-native';

const TextInput = ({ style, ...props }) => (
  <Input
    placeholderTextColor={'gray'}
    style={{ ...styles.containerStyle, ...style }}
    {...props}
  />
);

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    borderWidth: 1.5,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 15,
    borderColor: 'rgba(0, 0, 0, 1)',
  },
});

export default TextInput;
