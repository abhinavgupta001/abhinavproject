import {atom} from 'jotai';
import {ImageSourcePropType} from 'react-native';

export const backgroundImageAtom = atom<ImageSourcePropType>(
  require('./assets/imgs/default_background.webp'),
);
