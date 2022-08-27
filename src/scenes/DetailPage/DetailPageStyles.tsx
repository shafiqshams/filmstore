import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../assets/fonts';
import colors from '../../styles/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.black01,
    paddingTop: 20,
  },
  containerStyles: {
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    width: width - 60,
  },
  taglineContainer: {
    flex: 0.15,
    marginBottom: 15,
  },
  taglineStyles: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
    fontFamily: Fonts.ComicSansItalic,
    letterSpacing: 0.2,
  },
  imageStyle: {
    width: width - 60,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 18,
  },
  overviewContainer: {
    flex: 0.85,
    marginTop: 24,
  },
  overviewFav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  overviewHeadline: {
    fontSize: 28,
    color: colors.red,
    fontFamily: Fonts.WeastHood,
  },
  overviewStyles: {
    textAlign: 'left',
    fontSize: 16,
    color: colors.white,
    fontFamily: Fonts.OpenSans,
    letterSpacing: 0.8,
  },
});
