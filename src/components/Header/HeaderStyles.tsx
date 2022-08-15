import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black01,
    height: 80,
    width: width,
  },
  boundryContainer: {
    borderColor: colors.white,
    borderWidth: 1.5,
    padding: 12,
    paddingHorizontal: 40,
  },
  textStyle: {
    fontSize: 24,
    color: colors.white,
    fontFamily: 'OpenSans-SemiBold',
    letterSpacing: 0.2,
  },
});
