import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../assets/fonts';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  titleContainer: {
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  textStyle: {
    fontSize: 20,
    color: colors.white,
    fontFamily: Fonts.ComicSans,
  },
  underLineStyle: {
    width: width,
    borderBottomColor: colors.white,
    borderWidth: 2,
    marginBottom: 5,
  },
});
