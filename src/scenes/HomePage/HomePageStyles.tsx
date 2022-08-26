import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {Fonts} from '../../assets/fonts';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.black01,
    marginTop: 20,
  },
  carouselWrapper: {
    width: width - 30,
    margin: 15,
  },
  textStyle: {
    fontSize: 32,
    color: colors.red,
    fontFamily: Fonts.WeastHood,
    letterSpacing: 0.2,
  },
});
