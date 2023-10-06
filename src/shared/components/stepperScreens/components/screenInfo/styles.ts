import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: normalize(32),
    marginBottom: normalize(24),
  },
  title: {
    fontSize: normalize(20),
    fontWeight: '700',
  },
  description: {
    marginTop: normalize(8),
    color: semantic.text.light,
  },
});
