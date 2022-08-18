import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.black01,
    marginTop: 5,
  },

  textWrapper: {
    flex: 0.6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    textAlign: 'center',
    fontSize: 32,
    color: colors.red,
    fontFamily: 'Weast-hood',
    letterSpacing: 0.2,
  },

  iconTouchWrapper: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    flex: 0.2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconStyle: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});

export default styles;
