import {StyleSheet} from 'react-native';
import {Sizes} from '../../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    page: {
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
    container: {
      flex: 1,
      padding: Sizes.size24,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    close: {
      marginTop: Sizes.size23,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginRight: Sizes.size23,
      padding: Sizes.size5,
    },
    content: {
      alignItems: 'center',
      marginTop: Sizes.size17,
    },
    text: {
      fontFamily: 'ArchivoBlack-Regular',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size24,
      lineHeight: Sizes.size24,
      letterSpacing: 0.25,
      color: '#2f302f',
      marginTop: Sizes.size32,
    },
    text1: {
      fontFamily: 'BaiJamjuree-Bold',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size18,
      lineHeight: Sizes.size16,
      letterSpacing: 0.25,
      color: '#6B6A6C',
      marginTop: Sizes.size29,
    },
  });
};

export {styles};
