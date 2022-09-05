import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import ArrowBack from '../../assets/icons/arrowBack';
import {Sizes} from '../../assets/RootStyle';
import LocatIcon from '../../assets/icons/locatIcon';
import ArrowRight from '../../assets/icons/arrowRight';

function AddScreen({navigation}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: Sizes.size30,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{marginLeft: Sizes.size10}}
          onPress={() => navigation.navigate('Challenge')}>
          <ArrowBack />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: Sizes.size120,
            height: Sizes.size35,
            position: 'absolute',
            right: Sizes.size20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#045afd',
            borderRadius: Sizes.size24,
          }}>
          <Text
            style={{
              fontFamily: 'ArchivoBlack-Regular',
              fontSize: Sizes.size12,
              lineHeight: Sizes.size24,
              color: '#edf2fb',
            }}>
            CREATE
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          fontFamily: 'ArchivoBlack-Regular',
          fontSize: Sizes.size20,
          lineHeight: Sizes.size24,
          color: '#343536',
        }}>
        New Challenge
      </Text>
      <TextInput
        placeholder={'Challenge Title'}
        style={{
          width: Sizes.size350,
          height: Sizes.size50,
          backgroundColor: '#F5F5F5',
          borderRadius: Sizes.size8,
          paddingLeft: Sizes.size10,
          marginTop: Sizes.size20,
          alignSelf: 'center',
          fontFamily: 'ArchivoBlack-Regular',
          shadowColor: '#000',
          shadowOffset: {
            width: Sizes.size0,
            height: Sizes.size3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: Sizes.size6,
        }}
      />
      <TouchableOpacity
        style={{
          width: Sizes.size350,
          height: Sizes.size50,
          backgroundColor: '#F5F5F5',
          borderRadius: Sizes.size8,
          paddingLeft: Sizes.size10,
          marginTop: Sizes.size20,
          alignSelf: 'center',
          fontFamily: 'ArchivoBlack-Regular',
          shadowColor: '#000',
          shadowOffset: {
            width: Sizes.size0,
            height: Sizes.size3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: Sizes.size6,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              position: 'absolute',
              top: Sizes.size10,
            }}>
            <LocatIcon
              iconWidth={Sizes.size26}
              iconHeight={Sizes.size26}
              iconColor1={'#2e2e2d'}
              iconColor2={'#2e2e2d'}
            />
          </View>
          <View style={{marginLeft: Sizes.size35}}>
            <Text
              style={{
                fontFamily: 'BaiJamjuree-Bold',
                fontSize: Sizes.size16,
                color: '#2e2e2e',
                marginBottom: Sizes.size5 * -1,
              }}>
              Gyumri Hatsatun
            </Text>
            <Text
              style={{
                fontFamily: 'BaiJamjuree-Medium',
                fontSize: Sizes.size12,
              }}>
              Khaghaghutyan oghak 1, Gyumri
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              right: Sizes.size5,
              top: Sizes.size12,
            }}>
            <ArrowRight />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default AddScreen;
