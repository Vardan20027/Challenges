import React, {useMemo, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import GreatIcon from '../../../assets/icons/greatIcon';
import CloseIcon from '../../../assets/icons/closeIcon';
import {styles} from './style';

function GreatBtSheet({great, setGreat}) {
  const {page, container, content, text, close, text1} = styles();
  const snapPoints = useMemo(() => ['45%', '80%', '100%'], []);
  const sheetRef = useRef(null);

  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet snapPoints={snapPoints} ref={sheetRef} index={0}>
          <TouchableOpacity
            style={close}
            onPress={() => {
              setGreat(!great);
            }}>
            <CloseIcon />
          </TouchableOpacity>
          <View style={content}>
            <GreatIcon />
            <Text style={text}>Hooray!!</Text>
            <Text style={text1}>You have joined the challenge</Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default GreatBtSheet;
