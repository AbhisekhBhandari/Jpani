import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import { semantic} from "@/shared/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(24),
    paddingHorizontal: normalize(10),
    backgroundColor: semantic.background.white,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',

  },
  btnIcon: {
    width: normalize(26),
    height: normalize(26),
  },
  containerTitle: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: normalize(16),
    fontWeight: '700',
  },
});
