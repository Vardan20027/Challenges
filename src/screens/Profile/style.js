import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginTop: Sizes.size10,
      fontFamily: 'ArchivoBlack-Regular',
      fontSize: Sizes.size20,
      lineHeight: Sizes.size24,
      color: '#343536',
    },
  });
};

export {styles};
