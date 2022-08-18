import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.black01,
    marginTop: 20,
  },
  textStyle: {
    fontSize: 18,
  },
  carouselWrapper: {
    width: width - 30,
    margin: 15,
  },
});
