import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalize(14),
  },
  divider: {
    marginHorizontal: normalize(10),
  },
  deliveryPrice: {
    fontSize: normalize(16),
    textDecorationLine: 'line-through',
  },
  text: {
    color: semantic.text.light,
    fontSize: normalize(16),
  },
  image: {
    height: normalize(300),
  },
  title: {
    fontSize: normalize(24),
    fontWeight: '700',
  },
  iconSize: {
    width: normalize(24),
    height: normalize(24),
  },
  icon: {
    tintColor: semantic.text.light,
    marginRight: normalize(4),
  },
  containerInfo: {
    padding: normalize(14),
  },
  btns: {
    width: normalize(36),
    height: normalize(36),
    backgroundColor: semantic.background.light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
});
