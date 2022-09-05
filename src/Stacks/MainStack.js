import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductScreen, AddProductScreen, ProductInfoScreen } from '../Screens';

import { NavigationStrings } from '../Contants';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={NavigationStrings.PLANET_SCREEN}
      screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
      <Stack.Screen
        name={NavigationStrings.PRODUCT_SCREEN}
        component={ProductScreen}
      />
      <Stack.Screen
        name={NavigationStrings.ADD_PRODUCT_SCREEN}
        component={AddProductScreen}
      />
      <Stack.Screen
        name={NavigationStrings.PRODUCT_INFO_SCREEN}
        component={ProductInfoScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
