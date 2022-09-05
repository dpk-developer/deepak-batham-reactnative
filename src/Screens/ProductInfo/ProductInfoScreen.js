import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { AppHeader } from '../../Components';

import styles from './Style';

const ProductInfoScreen = ({ route }) => {
  const { name, price, avatar, description } = route?.params?.productInfo;

  return (
    <View style={styles.containerStyle}>
      {/* App Header */}
      <AppHeader title={name} />

      {/* Product Image */}
      <ImageBackground
        source={{
          uri: avatar,
        }}
        style={styles.productImageStyle}
      />

      {/* Product Info */}
      <View style={styles.productInfoStyle}>
        <View style={styles.productFlexStyle}>
          {/* Product Title */}
          <Text style={styles.productTitleStyle}>{name}</Text>

          {/* Product Price */}
          <Text style={styles.productPriceStyle}>${price}</Text>
        </View>

        {/* Product Description */}
        <Text style={styles.productDescStyle}>{description}</Text>
      </View>
    </View>
  );
};

export default ProductInfoScreen;
