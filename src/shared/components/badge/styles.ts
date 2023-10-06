import {StyleSheet} from 'react-native';
import {semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';

export const _styles = (bgColor: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      paddingVertical: normalize(4),
      paddingHorizontal: normalize(8),
      borderRadius: normalize(12),
      alignSelf: 'flex-start',
    },
    text: {
      color: semantic.text.lightest,
      fontWeight: '700',
      textAlign: 'center',
    },
  });
