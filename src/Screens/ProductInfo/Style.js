import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(212, 212, 212, 212)',
  },
  productImageStyle: {
    width: '100%',
    height: 300,
  },
  productFlexStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  productInfoStyle: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  productTitleStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 255)',
  },
  productPriceStyle: {
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 255)',
  },
  productDescStyle: {
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 255)',
  },
});

export default styles;
