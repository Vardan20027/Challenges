import React from 'react';
import {View} from 'react-native';
import PlusIcon from '../../assets/icons/plusIcon';
import {Sizes} from '../../assets/RootStyle';

function AddButton(props) {
  return (
    <View>
      <PlusIcon
        iconWidth={Sizes.size32}
        iconHeight={Sizes.size32}
        iconColor={'#3275ff'}
        iconColor2={'#FFFFFF'}
      />
    </View>
  );
}

export default AddButton;
