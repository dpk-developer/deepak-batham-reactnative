import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(212, 212, 212, 212)',
  },
  contentContainerStyle: {
    margin: 5,
  },
  addProductStyle: {
    width: 50,
    height: 50,
    right: 20,
    bottom: 10,
    borderWidth: 2.5,
    borderRadius: 360,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(255, 255, 255, 255)',
  },
  addProductTextStyle: {
    top: -10,
    fontSize: 50,
  },
  categoryContainerStyle: {
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  titleStyle: {
    color: 'rgba(255, 255, 255, 255)',
  },
});

export default styles;
