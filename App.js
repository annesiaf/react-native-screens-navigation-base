import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

// Dale click al pikachu

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      </NavigationContainer>
  )
}

export default App;

