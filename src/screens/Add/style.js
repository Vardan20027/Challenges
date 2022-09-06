import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: Sizes.size30,
      alignItems: 'center',
    },
    createTouch: {
      width: Sizes.size120,
      height: Sizes.size35,
      position: 'absolute',
      right: Sizes.size20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#045afd',
      borderRadius: Sizes.size24,
    },
    createText: {
      fontFamily: 'ArchivoBlack-Regular',
      fontSize: Sizes.size12,
      lineHeight: Sizes.size24,
      color: '#edf2fb',
    },
    title: {
      alignSelf: 'center',
      fontFamily: 'ArchivoBlack-Regular',
      fontSize: Sizes.size20,
      lineHeight: Sizes.size24,
      color: '#343536',
    },
    input: {
      width: Sizes.size350,
      height: Sizes.size60,
      backgroundColor: '#F5F5F5',
      borderRadius: Sizes.size8,
      paddingLeft: Sizes.size10,
      marginTop: Sizes.size20,
      justifyContent: 'center',
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
    },
    locatText: {
      fontFamily: 'BaiJamjuree-Bold',
      fontSize: Sizes.size16,
      color: '#2e2e2e',
      marginBottom: Sizes.size5 * -1,
    },
    location: {
      fontFamily: 'BaiJamjuree-Medium',
      fontSize: Sizes.size12,
    },
    arrow: {
      position: 'absolute',
      right: Sizes.size5,
      top: Sizes.size12,
    },
    content: {
      position: 'absolute',
      top: Sizes.size10,
    },
    text: {
      fontFamily: 'BaiJamjuree-Regular',
      fontSize: Sizes.size16,
      color: '#2e2e2e',
    },
    dateView: {
      marginLeft: Sizes.size55,
      width: Sizes.size100,
      height: Sizes.size50,
      backgroundColor: '#eef0f4',
      borderRadius: Sizes.size12,
      padding: Sizes.size5,
      alignItems: 'center',
      flexDirection: 'row',
    },
    dateText: {
      fontFamily: 'BaiJamjuree-Bold',
      fontSize: Sizes.size14,
      color: '#2e2e2e',
      marginLeft: Sizes.size10,
    },
    coverTitle: {
      left: Sizes.size10,
      top: Sizes.size20,
      fontFamily: 'ArchivoBlack-Regular',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#343536',
    },
    coverPlus: {
      width: Sizes.size50,
      height: Sizes.size50,
      position: 'absolute',
      backgroundColor: '#333333',
      borderRadius: Sizes.size18,
      top: Sizes.size55,
      left: Sizes.size25,
    },
    ticketsDesc: {
      fontFamily: 'BaiJamjuree-Medium',
      fontSize: Sizes.size14,
    },
  });
};

export {styles};
