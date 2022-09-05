import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'ArchivoBlack-Regular',
      fontSize: Sizes.size18,
      lineHeight: Sizes.size24,
      fontWeight: '600',
    },
    text2: {
      fontFamily: 'BaiJamjuree-Regular',
      marginVertical: Sizes.size10,
      fontSize: Sizes.size16,
      lineHeight: Sizes.size20,
      fontWeight: '600',
    },
    touchable: {
      margin: Sizes.size20,
      borderWidth: Sizes.size1,
      borderColor: '#dadada',
      borderRadius: Sizes.size8,
      width: Sizes.size128,
      height: Sizes.size128,
    },
    plus: {
      position: 'absolute',
      bottom: Sizes.size55 * -1,
      right: Sizes.size60 * -1,
    },
    input: {
      fontFamily: 'BaiJamjuree-Bold',
      marginTop: Sizes.size20,
      width: Sizes.size313,
      height: Sizes.size50,
      padding: Sizes.size15,
      borderRadius: Sizes.size12,
      borderWidth: Sizes.size1,
      alignItems: 'center',
      borderColor: '#dadada',
    },
    button: {
      marginTop: Sizes.size50,
      width: Sizes.size313,
      height: Sizes.size55,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#045afd',
      borderRadius: Sizes.size24,
    },
    butText: {
      fontFamily: 'ArchivoBlack-Regular',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      fontWeight: '600',
      color: '#edf2fb',
    },
  });
};

export {styles};
