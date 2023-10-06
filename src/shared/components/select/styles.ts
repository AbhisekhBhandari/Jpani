import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const _styles = (active: boolean | undefined) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: active ? semantic.border.active : semantic.background.light,
      padding: normalize(16),
      borderRadius: normalize(8),
    },
    containerInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dot: {
      width: normalize(5),
      height: normalize(5),
      borderRadius: 150,
      backgroundColor: semantic.background.dark,
      marginHorizontal: normalize(5),
    },
    icon: {
      marginLeft: normalize(5),
    },
    text: {
      fontWeight: '700',
    },
    textNormal: {
      fontWeight: '500',
    },
    description: {
      color: semantic.border.active,
    },
  });
