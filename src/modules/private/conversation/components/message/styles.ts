import {StyleSheet} from 'react-native';
import {semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';

export const _styles = (me?: boolean | undefined) =>
  StyleSheet.create({
    container: {
      backgroundColor: me ? semantic.background.dark : '#F4F4F4',
      alignSelf: me ? 'flex-end' : 'flex-start',
      padding: normalize(12),
      marginBottom: 20,
      marginVertical: 5,
      borderRadius: normalize(8),
      maxWidth: '80%',
    },
    message: {
      color: me ? semantic.text.lightest : semantic.text.default,
      fontSize: normalize(14),
      fontWeight: '500',
    },
  });
