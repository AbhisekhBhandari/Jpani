import {StyleSheet} from 'react-native';
import {semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: semantic.background.white,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: normalize(64),
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(24),
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  maps: {
    height: normalize(180),
    width: '100%',
  },
  body: {
    padding: normalize(24),
  },
  my: {
    marginVertical: normalize(6),
  },
});