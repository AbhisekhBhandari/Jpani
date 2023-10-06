import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mt: {
    marginTop: normalize(14),
  },
  containerSection: {
    backgroundColor: 'white',
    padding: normalize(24),
  },
  name: {
    fontSize: normalize(18),
    fontWeight: '700',
  },
  description: {
    color: semantic.text.light,
    lineHeight: normalize(20),
    marginTop: normalize(4),
  },
  price: {
    fontSize: normalize(18),
    fontWeight: '700',
    marginTop: normalize(12),
  },
  sectionTitle: {
    fontSize: normalize(18),
    fontWeight: '700',
  },
  buttonNavigationBar: {
    backgroundColor: 'rgba(245, 246, 248, 0.6)',
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
