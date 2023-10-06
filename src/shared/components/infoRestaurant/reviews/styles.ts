import {StyleSheet} from 'react-native';
import { palette, semantic } from "@/shared/constants/colors";
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  info: {
    color: semantic.text.light,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: normalize(5),
    height: normalize(5),
    borderRadius: 150,
    backgroundColor: semantic.background.dark,
    marginHorizontal: normalize(8),
  },
  iconStar: {
    tintColor: palette.secondary.lemon.base,
  },
});
