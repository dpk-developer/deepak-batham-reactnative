import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppHeader = ({ title, visible }) => {
  return (
    <View style={styles.conatainerStyle}>
      <Text style={styles.textStyle}>{title}</Text>
      {visible ? <Text style={styles.serachIcStyle}>🔎</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  conatainerStyle: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  serachIcStyle: {
    fontSize: 25,
  },
});

export default AppHeader;
