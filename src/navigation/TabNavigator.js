import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChallengeScreen from '../screens/Challenges';
import ProfileScreen from '../screens/Profile';
import AddScreen from '../screens/Add';
import ChallengeIcon from '../assets/icons/challengeIcon';
import ProfileIcon from '../assets/icons/profileIcon';

const Tab = createBottomTabNavigator();

// eslint-disable-next-line react-hooks/rules-of-hooks
const mode = useRef(new Animated.Value(0)).current;
// eslint-disable-next-line react-hooks/rules-of-hooks
const buttonSize = useRef(new Animated.Value(1)).current;
const sizeStyle = {
  transform: [{scale: buttonSize}],
};
const handlePress = () => {
  Animated.timing(buttonSize, {
    toValue: 1,
    duration: 100,
    useNativeDriver: false,
  }).start();
};
const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};
export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Challenge"
        component={ChallengeScreen}
        options={{tabBarIcon: ({focused}) => <ChallengeIcon />}}
      />
      <Tab.Screen
        name="AddChallenge"
        component={AddScreen}
        options={{tabBarIcon: ({focused}) => <AddButton />}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarIcon: ({focused}) => <ProfileIcon />}}
      />
    </Tab.Navigator>
  );
}
