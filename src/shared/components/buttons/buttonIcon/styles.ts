import {StyleSheet} from 'react-native';
import {palette, semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';

export const _styles = (disabled: boolean | undefined) =>
  StyleSheet.create({
    container: {
      backgroundColor: disabled
        ? palette.neutral.lighter
        : semantic.background.dark,
      padding: normalize(14),
      borderRadius: normalize(8),
      flexDirection: 'row',
      alignItems: 'center',
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
      padding: normalize(14),
      borderRadius: normalize(8),
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconOutline: {
      tintColor: disabled ? palette.neutral.lighter : semantic.background.dark,
      width: normalize(24),
      height: normalize(24),
    },
  });
