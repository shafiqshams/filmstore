import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScene from '../scenes/HomePage/HomePage';
import FavoritesPage from '../scenes/FavoritesPage/FavoritesPage';
import DetailPage from '../scenes/DetailPage/DetailPage';
import {RootStackParamList} from '../typings/index';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScene} />
      <HomeStack.Screen name="Favorites" component={FavoritesPage} />
      <HomeStack.Screen name="Details" component={DetailPage} />
    </HomeStack.Navigator>
  );
}
