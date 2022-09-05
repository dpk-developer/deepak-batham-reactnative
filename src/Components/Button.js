import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ title, containerStyle, titleStyle, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={{ ...styles.containerStyle, ...containerStyle }}>
      <Text style={{ ...styles.titleStyle, ...titleStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  titleStyle: {
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 255)',
  },
});

export default Button;
