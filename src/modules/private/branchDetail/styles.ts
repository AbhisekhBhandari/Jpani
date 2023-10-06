import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mt: {
    marginTop: normalize(14),
  },
  buttonNavigationBar: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(14),
  },
  totalText: {
    fontSize: normalize(16),
  },
  totalPrice: {
    fontWeight: '700',
    fontSize: normalize(20),
  },
});
