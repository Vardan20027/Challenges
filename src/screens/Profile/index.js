import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

function ProfileScreen(props) {
  const {container, title} = styles();
  return (
    <View style={container}>
      <Text style={title}>Profile</Text>
    </View>
  );
}

export default ProfileScreen;
