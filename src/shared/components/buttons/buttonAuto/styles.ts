import {StyleSheet} from 'react-native';
import {palette, semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';

export const _styles = (disabled: boolean | undefined) =>
  StyleSheet.create({
    container: {
      paddingVertical: normalize(14),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: normalize(160)
    },
    text: {
      color: semantic.text.default,
      fontWeight: '700',
      fontSize: normalize(16),
      textAlign: 'right',
      flex: 1,
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
      paddingHorizontal: normalize(18),
      paddingVertical: normalize(14),
      borderRadius: normalize(8),
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
      flex: 1,
    },
  });
