import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerMenu: {
    marginTop: normalize(18),
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  item: {
    flex: 0.4,
    marginRight: normalize(14),
    paddingHorizontal: normalize(10),
    paddingBottom: normalize(10),
  },
  itemActive: {
    paddingBottom: normalize(10),
    borderBottomWidth: 1,
  },
  textMenu: {
    fontSize: normalize(16),
  },
  textMenuActive: {
    fontSize: normalize(16),
    fontWeight: '700',
  },
  resultMenu: {
    marginTop: normalize(10),
    paddingHorizontal: normalize(14),
  },
});
