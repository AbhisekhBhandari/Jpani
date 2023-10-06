import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  containerTitle: {
    height: normalize(44),
    paddingHorizontal: normalize(20),
    justifyContent: 'center',
  },
  containerPicker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
