import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      width: Sizes.size92,
      height: Sizes.size92,
      marginHorizontal: Sizes.size4,
    },
    image: {
      maxWidth: Sizes.size92,
      maxHeight: Sizes.size92,
      borderRadius: Sizes.size32,
    },
    image2: {
      maxWidth: Sizes.size92,
      maxHeight: Sizes.size92,
      borderRadius: Sizes.size32,
      borderWidth: Sizes.size3,
      borderColor: 'white',
    },
  });
};

export {styles};
