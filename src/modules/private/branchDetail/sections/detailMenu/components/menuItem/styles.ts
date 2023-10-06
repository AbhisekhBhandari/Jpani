import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mt: {
    marginTop: normalize(14),
  },
  paddingHorizontal: {
    padding: normalize(24),
  },
  containerSection: {
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: normalize(18),
    fontWeight: '700',
  },
  icon: {
    width: normalize(15),
    height: normalize(15),
    marginLeft: normalize(6),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: normalize(56),
    flex: 1,
    marginRight: normalize(10),
  },
  nameItem: {
    fontWeight: '500',
    fontSize: normalize(15),
  },
});
