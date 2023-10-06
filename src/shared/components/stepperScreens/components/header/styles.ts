import {StyleSheet} from 'react-native';
import {semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';

export const _styles = (progress: number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    containerProgress: {
      height: normalize(8),
      backgroundColor: '#E8E8E8',
      marginHorizontal: normalize(10),
      flex: 1,
      borderRadius: normalize(12),
    },
    progress: {
      width: `${progress}%`,
      height: normalize(8),
      backgroundColor: semantic.background.dark,
      borderRadius: normalize(12),
    },
  });
