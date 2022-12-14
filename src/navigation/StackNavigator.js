import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNav from './TabNavigator';
import {navigationRef} from './RootNavigation';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tab" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
