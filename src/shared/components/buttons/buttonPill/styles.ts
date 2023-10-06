import {StyleSheet} from 'react-native';
import {palette, semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';

export const _styles = (disabled: boolean | undefined) =>
  StyleSheet.create({
    container: {
      backgroundColor: disabled
        ? palette.neutral.lighter
        : semantic.background.dark,
      paddingHorizontal: normalize(16),
      paddingVertical: normalize(6),
      borderRadius: normalize(28),
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: semantic.text.lightest,
      fontWeight: '700',
      marginHorizontal: normalize(4),
      fontSize: normalize(14),
      textAlign: 'center',
    },
    icon: {
      tintColor: semantic.text.lightest,
      width: normalize(24),
      height: normalize(24),
    },
    containerOutline: {
      borderColor: disabled
        ? palette.neutral.lighter
        : semantic.background.dark,
      borderWidth: 1,
      paddingHorizontal: normalize(16),
      paddingVertical: normalize(6),
      borderRadius: normalize(28),
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconOutline: {
      tintColor: disabled ? palette.neutral.lighter : semantic.background.dark,
      width: normalize(24),
      height: normalize(24),
    },
    textOutline: {
      color: disabled ? palette.neutral.lighter : semantic.background.dark,
      fontWeight: '700',
      marginHorizontal: normalize(4),
      fontSize: normalize(14),
      textAlign: 'center',
    },
  });
