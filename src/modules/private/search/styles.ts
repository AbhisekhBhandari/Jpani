import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: normalize(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: normalize(14),
    borderBottomColor: '#D8D8D8',
  },
  popular: {
    padding: normalize(24),
  },
  item: {
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(5),
    backgroundColor: '#D8D8D8',
    justifyContent: 'flex-end',
    borderRadius: normalize(24),
    marginRight: normalize(14),
  },
  nameItem: {
    color: semantic.text.light,
    fontWeight: '600',
  },
});
