import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {palette, semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginBottom: normalize(7),
  },
  dot: {
    width: normalize(5),
    height: normalize(5),
    borderRadius: 150,
    backgroundColor: semantic.text.light,
    marginHorizontal: normalize(10),
  },
  free: {
    fontWeight: '700',
    marginHorizontal: normalize(6),
    color: palette.primary.electricBase,
    fontSize: normalize(15),
  },
  deliveryPrice: {
    fontSize: normalize(15),
    textDecorationLine: 'line-through',
  },
  text: {
    color: semantic.text.light,
    fontSize: normalize(15),
  },
  title: {
    fontSize: normalize(24),
    fontWeight: '700',
  },
  category: {
    color: semantic.text.light,
    fontSize: normalize(15),
    fontWeight: '600',
    marginBottom: normalize(14),
    marginTop: normalize(7),
  },
  iconSize: {
    width: normalize(22),
    height: normalize(22),
  },
  icon: {
    tintColor: semantic.text.light,
    marginRight: normalize(4),
  },
  containerInfo: {
    padding: normalize(14),
  },
});
