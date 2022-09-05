import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { ActionTypes } from '../../Contants';
import { AppHeader, TextInput, Category, Button } from '../../Components';

import styles from './Style';

const categoryList = [
  { category: 'Accessories', active: false },
  { category: 'Clothing', active: false },
  { category: 'Furniture', active: false },
  { category: 'Electronics', active: false },
];

const AddProductScreen = () => {
  const dispatch = useDispatch();

  const { addProduct } = useSelector(
    (state) => ({
      addProduct: state?.productReducer?.addProduct,
    }),
    shallowEqual,
  );

  const [product, setProduct] = useState({
    name: '',
    price: 0,
    developerEmail: 'dpkbatham2412@gmail.com',
    avatar: '',
    category: '',
    description: '',
  });

  useEffect(() => {
    if (addProduct === 'Success') {
      // eslint-disable-next-line no-alert
      alert('Product Added Successfully');

      setProduct({
        name: '',
        price: 0,
        developerEmail: 'dpkbatham2412@gmail.com',
        avatar: '',
        category: '',
        description: '',
      });

      categoryList.map((item) => (item.active = false));
    }
    return () => setProduct(null);
  }, [addProduct]);

  const onChangeText = (key, value) => {
    setProduct((prev) => ({ ...prev, [key]: value }));
  };

  const onAddProduct = () => {
    dispatch({
      type: ActionTypes.POST_PRODUCTS,
      payload: product,
    });
  };

  return (
    <View style={styles.containerStyle}>
      {/* App Header */}
      <AppHeader title={'Add Product'} />

      {/* Product Title */}
      <TextInput
        value={product.name}
        placeholder={'Product Title'}
        onChangeText={(text) => onChangeText('name', text)}
      />

      {/* Product Price */}
      <TextInput
        value={product.price}
        placeholder={'Price'}
        keyboardType={'number-pad'}
        onChangeText={(text) => onChangeText('price', text)}
      />

      {/* Product Description */}
      <TextInput
        multiline
        value={product.description}
        placeholder={'Description'}
        style={styles.descriptionStyle}
        onChangeText={(text) => onChangeText('description', text)}
      />

      {/* Product Image Link */}
      <TextInput
        value={product.avatar}
        placeholder={'Image Link'}
        onChangeText={(text) => onChangeText('avatar', text)}
      />

      {/* Product Categories */}
      <Text style={styles.selectedCatStyle}>Selected Category:</Text>
      <Category
        categoryList={categoryList}
        containerStyle={styles.buttonContainerStyle}
        onPressCategory={(value) => onChangeText('category', value)}
      />

      {/* Add Product */}
      <Button
        title={'Add Product'}
        containerStyle={styles.addProductStyle}
        onPress={onAddProduct}
      />
    </View>
  );
};

export default AddProductScreen;
