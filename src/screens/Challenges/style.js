import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    text: {
      fontFamily: 'ArchivoBlack-Regular',
      left: 0,
      fontSize: Sizes.size24,
    },
    date: {
      fontFamily: 'BaiJamjuree-Bold',
      position: 'absolute',
      right: 0,
      fontSize: Sizes.size15,
    },
    header: {
      flexDirection: 'row',
      marginVertical: Sizes.size10,
      alignItems: 'center',
    },
    flatContainer: {
      width: Sizes.size330,
      height: Sizes.size120,
      backgroundColor: '#ffffff',
      padding: Sizes.size10,
      borderRadius: Sizes.size8,
      marginVertical: Sizes.size5,
      marginLeft: Sizes.size10,
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
        width: Sizes.size0,
        height: Sizes.size3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: Sizes.size6,
    },
    flatImage: {
      width: Sizes.size100,
      height: Sizes.size100,
      backgroundColor: '#7a7a7a',
      borderRadius: Sizes.size12,
      marginRight: Sizes.size10,
    },
    flatContent: {
      width: Sizes.size200,
      height: Sizes.size100,
    },
    flatMembers: {
      flexDirection: 'row',
      marginLeft: Sizes.size20,
      width: Sizes.size70,
      height: Sizes.size30,
      backgroundColor: '#ebecec',
      borderRadius: Sizes.size8,
      position: 'absolute',
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatTime: {
      fontFamily: 'BaiJamjuree-SemiBold',
      fontSize: Sizes.size14,
      left: Sizes.size20,
      position: 'absolute',
    },
  });
};

export {styles};
