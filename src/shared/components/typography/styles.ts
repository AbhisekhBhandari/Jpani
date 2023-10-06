import {StyleSheet} from 'react-native';
import {normalize} from '../../helpers';
import {FONT} from '@/shared/constants/fonts';

export const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: normalize(14),
    fontFamily: FONT.NORMAL,
  },
});
