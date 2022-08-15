import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/routes/MainNavigator';
import colors from './src/styles/colors';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.black01}} />

      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={colors.black01}
        translucent={true}
      />

      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
