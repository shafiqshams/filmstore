import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScene from '../scenes/HomePage/HomePage';
import DetailPage from '../scenes/DetailPage/DetailPage';

const HomeStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScene} />
      <HomeStack.Screen name="Details" component={DetailPage} />
    </HomeStack.Navigator>
  );
}
