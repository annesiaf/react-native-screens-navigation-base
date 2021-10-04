import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack = createStackNavigator();

// Recuerda que al llamar una ruta, la llamas por el nombre asignado en name, no por el componente en si
// No se usa la barra / ni el ./, siempre es el nombre tal cual lo asignaste
export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="SecondScreen" component={ SecondScreen } />
    </Stack.Navigator>
  );
}