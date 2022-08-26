import {Platform} from 'react-native';

export const Fonts =
  Platform.OS === 'ios'
    ? {
        WeastHood: 'weasthood',
        ComicSans: 'ComicSansMS',
        ComicSansItalic: 'ComicSansMS-Italic',
        OpenSans: 'OpenSans-Regular',
      }
    : {
        WeastHood: 'Weast-hood',
        ComicSans: 'ComicSans-Regular',
        ComicSansItalic: 'ComicSans-Italic',
        OpenSans: 'OpenSans-Regular',
      };
