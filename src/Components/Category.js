import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { useSelector, shallowEqual } from 'react-redux';

import { Button } from '.';

const Category = ({
  categoryList,
  containerStyle,
  titleStyle,
  onPressCategory,
  onPressFilterCategory,
}) => {
  const { productList } = useSelector(
    (state) => ({
      productList: state?.productReducer?.productList,
    }),
    shallowEqual,
  );

  const onPressItem = (product) => {
    categoryList?.map((item) => {
      if (item.category === product?.category) {
        item.active = true;
      } else {
        item.active = false;
      }
    });

    if (onPressCategory) {
      return onPressCategory(product?.category);
    }

    const filterProduct = productList?.filter(
      (item) => item?.category === product?.category,
    );
    onPressFilterCategory(filterProduct?.length ? filterProduct : productList);
  };

  const renderItem = ({ item }) => (
    <Button
      title={item?.category}
      containerStyle={
        item?.active
          ? { ...styles.containerStyle, ...styles.buttonContainerStyle }
          : { ...styles.buttonContainerStyle, ...containerStyle }
      }
      titleStyle={
        item?.active
          ? { ...styles.titleStyle, ...styles.buttonTitleStyle }
          : { ...styles.buttonTitleStyle, ...titleStyle }
      }
      onPress={() => onPressItem(item)}
    />
  );

  return (
    <View>
      <FlatList
        horizontal
        data={categoryList}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index?.toString()}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainerStyle: {
    borderWidth: 1.5,
    borderColor: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(255, 255, 255, 255)',
  },
  buttonTitleStyle: {
    color: 'rgba(0, 0, 0, 1)',
  },
});

export default Category;
