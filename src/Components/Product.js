import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Product = ({ image, title, price, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={styles.containerStyle}>
      <Image
        source={{
          uri: image,
        }}
        resizeMode={'contain'}
        style={styles.productImgStyle}
      />
      <View style={styles.productInfoStyle}>
        <Text style={styles.productTitleStyle}>{title}</Text>

        <View style={styles.productFlexRowStyle}>
          <Text style={styles.productTitleStyle}>{price}</Text>
          <Text style={styles.productTitleStyle}>✏️</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // flex: 1,
    width: '47%',
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 255)',
  },
  productFlexRowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImgStyle: {
    width: '100%',
    height: 140,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  productInfoStyle: {
    marginTop: 30,
    padding: 5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  productTitleStyle: {
    fontWeight: '700',
    marginVertical: 2,
    color: 'rgba(255, 255, 255, 255)',
  },
});

export default Product;
