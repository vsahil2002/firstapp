import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from '../../constant/screens';
import StartScreen from '../../screens/Start/start';
import LoginScreen from '../../screens/Login/login';
import HomeScreen from '../../screens/Home/home';
import SpalshScreen from '../../screens/Splash/splash';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={screens.Spalsh}>
      <Stack.Screen name={screens.Spalsh} component={SpalshScreen} options={{ headerShown: false }} />
      <Stack.Screen name={screens.Start} component={StartScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name={screens.Login}
        component={LoginScreen}
        options={{ headerShown: true, headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name={screens.Home}
        component={HomeScreen}
        options={{ headerShown: true, headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}
