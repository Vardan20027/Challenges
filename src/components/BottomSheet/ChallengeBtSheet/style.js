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
      padding: 24,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchable: {
      width: Sizes.size313,
      height: Sizes.size45,
      backgroundColor: '#11493E',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Sizes.size4,
    },
    text: {
      color: '#FCFCFC',
      fontSize: Sizes.size14,
    },
    text1: {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      letterSpacing: 0.25,
      color: '#11493E',
    },
    view: {
      width: Sizes.size335,
      borderBottomWidth: Sizes.size1,
      borderColor: '#E3E3E3',
      flexDirection: 'row',
      alignItems: 'center',
    },
    close: {
      left: Sizes.size150,
      width: Sizes.size20,
      height: Sizes.size20,
      padding: Sizes.size5,
    },
    viewText: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: Sizes.size14,
      lineHeight: Sizes.size16,
      letterSpacing: 0.25,
      color: '#616062',
    },
    image: {
      maxWidth: Sizes.size156,
      maxHeight: Sizes.size156,
      borderRadius: Sizes.size24,
      alignSelf: 'center',
    },
    title: {
      fontFamily: 'ArchivoBlack-Regular',
      fontSize: Sizes.size24,
      marginTop: Sizes.size10,
    },
    desc: {
      fontFamily: 'BaiJamjuree-SemiBold',
      fontSize: Sizes.size16,
      marginTop: Sizes.size10,
    },
    locat: {
      fontFamily: 'BaiJamjuree-Bold',
      fontSize: Sizes.size15,
      color: '#2e2e2e',
      position: 'absolute',
      right: Sizes.size15,
    },
    members: {
      flexDirection: 'row',
      marginTop: Sizes.size20,
      marginLeft: Sizes.size10,
      width: Sizes.size70,
      height: Sizes.size45,
      backgroundColor: '#ebecec',
      borderRadius: Sizes.size8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    createTouch: {
      width: Sizes.size350,
      height: Sizes.size45,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Sizes.size40,
      alignSelf: 'center',
      backgroundColor: '#045afd',
      borderRadius: Sizes.size24,
    },
    createText: {
      fontFamily: 'ArchivoBlack-Regular',
      fontSize: Sizes.size16,
      lineHeight: Sizes.size24,
      color: '#edf2fb',
    },
  });
};

export {styles};
