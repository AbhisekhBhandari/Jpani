import {StyleSheet} from 'react-native';
import {palette, semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';

export const _styles = (disabled: boolean | undefined) =>
  StyleSheet.create({
    container: {
      backgroundColor: disabled
        ? palette.neutral.lighter
        : semantic.background.dark,
      paddingHorizontal: normalize(18),
      paddingVertical: normalize(14),
      borderRadius: normalize(8),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
    },
    textItem: {
      color: semantic.text.lightest,
      fontWeight: '700',
      marginHorizontal: normalize(4),
      fontSize: normalize(14),
    },
    textItemOutline: {
      color: disabled ? semantic.border.default : semantic.background.dark,
      fontWeight: '700',
      marginHorizontal: normalize(4),
      fontSize: normalize(14),
    },
    textCategory: {
      color: disabled ? semantic.text.lightest : semantic.border.default,
      marginHorizontal: normalize(4),
      fontSize: normalize(14),
    },
    textCategoryOutline: {
      color: semantic.border.default,
      marginHorizontal: normalize(4),
      fontSize: normalize(14),
    },
    icon: {
      tintColor: semantic.text.lightest,
      width: normalize(24),
      height: normalize(24),
    },
    iconOutline: {
      tintColor: disabled ? semantic.border.default : semantic.background.dark,
      width: normalize(24),
      height: normalize(24),
    },
    containerPrice: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      color: semantic.text.lightest,
      fontWeight: '700',
      fontSize: normalize(15),
    },
    priceOutline: {
      color: disabled ? semantic.border.default : semantic.background.dark,
      fontWeight: '700',
      fontSize: normalize(15),
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
      justifyContent: 'space-between',
      flex: 1,
    },
  });
