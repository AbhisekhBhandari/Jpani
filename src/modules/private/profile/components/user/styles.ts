import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(30),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: semantic.text.default,
  },
  email: {
    fontWeight: '500',
    color: semantic.text.light,
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
  },
});
