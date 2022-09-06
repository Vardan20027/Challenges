import React, {useMemo, useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import CloseIcon from '../../../assets/icons/closeIcon';
import {Sizes} from '../../../assets/RootStyle';
import LocatIcon from '../../../assets/icons/locatIcon';
import ClockIcon from '../../../assets/icons/clockIcon';

function ChallengeBtSheet({open, setOpen, active, great, setGreat}) {
  const snapPoints = useMemo(() => ['65%', '80%', '100%'], []);
  const sheetRef = useRef(null);
  const {
    container,
    content,
    page,
    close,
    image,
    title,
    desc,
    locat,
    members,
    createTouch,
    createText,
  } = styles();

  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet snapPoints={snapPoints} ref={sheetRef} index={0}>
          <View style={content}>
            <TouchableOpacity
              style={close}
              onPress={() => {
                setOpen(!open);
              }}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Image source={active.img} style={image} />
            <View>
              <Text style={title}>{active.title}</Text>
            </View>
          </View>
          <View style={{alignSelf: 'center', marginTop: Sizes.size10}}>
            <Text style={desc}>{active.description}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginLeft: Sizes.size10,
                marginTop: Sizes.size20,
                width: Sizes.size180,
                height: Sizes.size45,
                alignItems: 'center',
                backgroundColor: '#ebecec',
                borderRadius: Sizes.size8,
                flexDirection: 'row',
              }}>
              <LocatIcon
                iconWidth={Sizes.size22}
                iconHeight={Sizes.size22}
                iconColor1={'#2e2e2d'}
                iconColor2={'#2e2e2d'}
              />
              <Text style={locat}>{active.location}</Text>
            </View>

            <View
              style={{
                marginLeft: Sizes.size10,
                marginTop: Sizes.size20,
                width: Sizes.size90,
                height: Sizes.size45,
                alignItems: 'center',
                backgroundColor: '#ebecec',
                borderRadius: Sizes.size8,
                flexDirection: 'row',
              }}>
              <View style={{marginHorizontal: Sizes.size5}}>
                <ClockIcon
                  iconWidth={Sizes.size24}
                  iconHeight={Sizes.size24}
                  iconColor1={'#2e2e2d'}
                  iconColor2={'#2e2e2d'}
                />
              </View>
              <Text style={locat}>{active.time}</Text>
            </View>
            <View style={members}>
              <Image
                source={active.membImg}
                style={{
                  maxHeight: Sizes.size18,
                  maxWidth: Sizes.size18,
                  borderRadius: Sizes.size4,
                }}
              />
              <Text
                style={{
                  fontFamily: 'BaiJamjuree-Bold',
                  fontSize: Sizes.size15,
                  color: '#2e2e2e',
                  marginLeft: Sizes.size5,
                }}>
                {active.members}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={createTouch}
            onPress={() => {
              setOpen(!open);
              setGreat(!great);
            }}>
            <Text style={createText}>JOIN</Text>
          </TouchableOpacity>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default ChallengeBtSheet;
