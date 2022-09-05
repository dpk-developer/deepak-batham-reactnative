import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { AppHeader, Category, Product } from '../../Components';
import { ActionTypes, NavigationStrings } from '../../Contants';

import styles from './Style';

const categoryList = [
  { category: 'All', active: true },
  { category: 'Accessories', active: false },
  { category: 'Clothing', active: false },
  { category: 'Furniture', active: false },
  { category: 'Electronics', active: false },
];

const ProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { productList } = useSelector(
    (state) => ({
      productList: state?.productReducer?.productList,
    }),
    shallowEqual,
  );

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    if (productList && productList?.length) {
      setDataSource(productList);
    } else {
      dispatch({ type: ActionTypes.GET_PRODUCTS });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  const onPressProduct = (productInfo) => {
    navigation.navigate(NavigationStrings.PRODUCT_INFO_SCREEN, {
      productInfo,
    });
  };

  const onPressFilterCategory = (filterProduct) => {
    setDataSource(filterProduct);
  };

  const renderItem = ({ item }) => (
    <Product
      image={item?.avatar}
      title={item?.name}
      price={item?.price}
      onPress={() => onPressProduct(item)}
    />
  );

  return (
    <View style={styles.containerStyle}>
      {/* App Header */}
      <AppHeader title={'UPayment Store'} visible />

      {/* Categories  */}
      <Category
        categoryList={categoryList}
        titleStyle={styles.titleStyle}
        onPressFilterCategory={onPressFilterCategory}
        containerStyle={styles.categoryContainerStyle}
      />

      {/* Products */}
      <FlatList
        numColumns={2}
        data={dataSource}
        initialNumToRender={6}
        renderItem={renderItem}
        style={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index?.toString()}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.addProductStyle}
        onPress={() => {
          navigation.navigate(NavigationStrings.ADD_PRODUCT_SCREEN);
        }}>
        <Text style={styles.addProductTextStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;
