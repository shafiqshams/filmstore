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
        WeastHood: 'Weast-Hood',
        ComicSans: 'ComicSans-Regular',
        ComicSansItalic: 'ComicSans-Italic',
        OpenSans: 'OpenSans-Regular',
      };
