## Aplicacion base en React Native
-------------------------------------------------

## Ejemplo de la Aplicacion
![blogspot](https://user-images.githubusercontent.com/66213550/136045073-b116be31-5279-4b59-93fa-de9d59463f07.png)

-------------------------------------------------

## Requisitos previos
Configuracion del entorno de desarrollo:
[ Pagina oficial de React Native, Expo o CLI ](https://reactnative.dev/docs/environment-setup)

## Primeros pasos en React Native CLI 

Instalacion:
`npm install -g react-native-cli`

Inicializacion de proyecto:
`npx react-native init nameyourapp`

Ejecutamos Metro Bundler:
`npx react- native start`

Lanzamiento de aplicacion:
`npx react-native run-android` || `npx react-native run-ios`

## Creacion de la aplicacion Base

- Crear carpeta src, y dentro de ella: screens y navigation.
- Crear las pantallas necesarias, recomiendo el uso del snipet rafc para generar algo similar a:

```
import React from 'react';
import { View, Text } from 'react-native';

const Screen = () => {
  return (
    <View>
      <Text> Hello World </Text>
    </View>
  )
}

export default Screen;
```

Una vez tenemos nuestro App y nuestras pantallas podemos comenzar con la navegación:

Paso 1 - [Getting Started](https://reactnavigation.org/docs/getting-started/)


Paso 2 - [Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)


Convirtamos el stack que nos provee la documentación oficial a una arrow function:

```
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="SecondScreen" component={ SecondScreen } />
    </Stack.Navigator>
  );
}
```

Es importante remarcar que las navegaciones se dan mediante el nombre que les asignemos en el stack, en el parametro name. Por ende, para hacer una llamada a la pantalla HomeScreen desde otro lado, tendremos que usar 'HomeScreen'.


Una vez tenemos nuestro stack (es bueno verlo como una baraja de naipes, donde una carta esta arriba de la otra y podemos ir sacando una a la vez), tenemos que volver a nuestro App. Aqui englobaremos nuestras pantallas dentro de nuestro functional componente (en este caso llamado Navigator, creado en nuestro Stack).

```
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      </NavigationContainer>
  )
}

export default App;
```
------------------------------------------------
A este punto, tendriamos nuestra primera aplicacion basica de React Native con navegacion entre pantallas. 

Recomiendo ver la seccion de [Componentes en React Native](https://reactnative.dev/docs/components-and-apis) para mas informacion.

