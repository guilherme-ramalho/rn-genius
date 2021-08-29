import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from '../screens/Game';
import Menu from '../screens/Menu';
import Lobby from '../screens/Lobby';

import { RootStackParamsList } from './paramsList';

interface RouteProps {}

const Stack = createNativeStackNavigator<RootStackParamsList>();

const EntryPoint: React.FC<RouteProps> = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        // headerShown: false,
      }}
    >
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Lobby" component={Lobby} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default EntryPoint;
