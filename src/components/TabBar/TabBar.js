import React, {useRef, useState} from 'react';
import {Animated, Pressable, View} from 'react-native';
import {styles} from './style';

import ProfileIcon from '../../assets/icons/profileIcon';
import AddButton from '../AddButton/AddButton';
import ChallengeIcon from '../../assets/icons/challengeIcon';
import {Sizes} from '../../assets/RootStyle';

function TabBar({state, descriptors, navigation}) {
  const {
    container,
    container2,
    content,
    background,
    focusedSt,
    unFocusedSt,
    tabbarSt,
  } = styles();
  const [f, setF] = useState(true);

  const mode = useRef(new Animated.Value(0)).current;
  const buttonSize = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 20,
        useNativeDriver: false,
      }),

      Animated.timing(buttonSize, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const sizeStyle = {
    transform: [{scale: buttonSize}],
  };
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === 'none') {
    return null;
  }

  return (
    <View>
      <View style={tabbarSt}>
        <AddButton f={f} setF={setF} sizeStyle={sizeStyle} />
      </View>

      <View style={content}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!f) {
              handlePress();
            }
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          const Svg = {
            Challenges: (
              <ChallengeIcon
                iconColor={isFocused && f ? '#045afd' : '#b9beca'}
                iconWidth={Sizes.size24}
                iconHeight={Sizes.size24}
              />
            ),

            Profile: (
              <ProfileIcon iconColor={isFocused && f ? '#045afd' : '#b9beca'} />
            ),
          };
          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={container2}
              key={route.key}>
              <View style={isFocused && f ? focusedSt : unFocusedSt}>
                {Svg[route.name]}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default TabBar;
