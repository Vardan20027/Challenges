import React, {useMemo, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Sizes} from '../../assets/RootStyle';
import PlusIcon from '../../assets/icons/plusIcon';
import DatePicker from 'react-native-date-picker';

function LoginScreen({navigation}, props) {
  const {container, text, text2, touchable, plus, input, button, butText} =
    styles();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const handleConfirm = date => {
    setOpen(false);
    setDate(date);
  };
  return (
    <View style={container}>
      <Text style={text}>Hey there!</Text>
      <Text style={text2}>Couple lines about yourself & lets start</Text>
      <TouchableOpacity style={touchable}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={{maxWidth: Sizes.size128, maxHeight: Sizes.size128}}
        />
        <View style={plus}>
          <Image
            source={require('../../assets/images/plus.png')}
            style={{maxWidth: Sizes.size128, maxHeight: Sizes.size128}}
          />
        </View>
      </TouchableOpacity>
      <TextInput style={input} placeholder={'Your Name'} />
      <TouchableOpacity
        style={[input, {flexDirection: 'row'}]}
        onPress={() => setOpen(true)}>
        <Text style={{fontFamily: 'BaiJamjuree-Regular'}}>Birthdate</Text>
        <Text
          style={{
            fontFamily: 'ArchivoBlack-Regular',
            position: 'absolute',
            right: Sizes.size5,
          }}>
          23 Feb 2022
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="datetime"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TouchableOpacity
        style={button}
        onPress={() => {
          navigation.navigate('Tab');
        }}>
        <Text style={butText}>CREATE</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
