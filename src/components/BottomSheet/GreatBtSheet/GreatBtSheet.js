import React, {useMemo, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import GreatIcon from '../../../assets/icons/greatIcon';
import CloseIcon from '../../../assets/icons/closeIcon';
import {styles} from './style';
import * as RootNavigation from '../../../navigation/RootNavigation';

function GreatBtSheet({great, setGreat, created, setCreated}) {
  const {page, container, content, text, close, text1} = styles();
  const snapPoints = useMemo(() => ['45%', '80%', '100%'], []);
  const sheetRef = useRef(null);

  return (
    <GestureHandlerRootView style={page}>
      <View style={container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          enablePanDownToClose={true}
          onClose={() => {
            great && setGreat(!great);
            created && setCreated(!created);
          }}>
          <TouchableOpacity
            style={close}
            onPress={() => {
              great && setGreat(!great);
              created && setCreated(!created);
              RootNavigation.navigate('Challenge');
            }}>
            <CloseIcon />
          </TouchableOpacity>
          <View style={content}>
            <GreatIcon />
            <Text style={text}>Hooray!!</Text>
            <Text style={text1}>
              {great
                ? 'You have joined the challenge!'
                : 'New challenge successfully created!'}
            </Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default GreatBtSheet;
