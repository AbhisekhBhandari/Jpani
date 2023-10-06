import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const _styles = (active: boolean | undefined) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
      padding: normalize(16),
      borderWidth: 1,
      borderColor: active ? semantic.background.dark : semantic.border.default,
      borderRadius: normalize(8),
    },
    title: {
      fontWeight: '700',
      color: semantic.text.light,
      fontSize: normalize(12),
    },
    price: {
      marginVertical: normalize(7),
      fontWeight: '700',
    },
    message: {
      marginTop: normalize(7),
      color: semantic.text.light,
    },
    containerRadioButton: {
      borderWidth: 1,
      borderColor: active ? semantic.background.dark : semantic.border.default,
      width: normalize(25),
      height: normalize(25),
      borderRadius: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerRadioButton: {
      width: normalize(15),
      height: active ? normalize(15) : 0,
      backgroundColor: semantic.background.dark,
      borderRadius: 150,
    },
  });
