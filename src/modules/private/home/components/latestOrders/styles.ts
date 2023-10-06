import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  container: {
    marginTop: normalize(20),
  },
  title: {
    fontWeight: '700',
    fontSize: normalize(18),
  },
  containerList: {
    marginTop: normalize(20),
  },
  divider: {
    marginHorizontal: normalize(10),
  },
  dividerVertical: {
    height: normalize(20),
  },
  product: {
    paddingVertical: normalize(20),
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },
});
