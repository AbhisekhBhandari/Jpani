import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    height: normalize(60),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: normalize(20),
  },
  icon: {
    width: normalize(34),
    height: normalize(34),
  },
  title: {
    color: semantic.text.default,
    fontWeight: '700',
  },
  description: {
    color: semantic.border.default,
    fontSize: normalize(12),
  },
  dot: {
    width: normalize(5),
    height: normalize(5),
    borderRadius: 150,
    backgroundColor: semantic.border.default,
    marginHorizontal: normalize(6),
  },
  info: {
    marginLeft: normalize(14),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  between: {
    justifyContent: 'space-between',
  },
});
