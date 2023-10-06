import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: normalize(64),
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(24),
  },
  body: {
    paddingVertical: normalize(10),
  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontWeight: '700',
  },
  containerAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profiles: {
    paddingHorizontal: normalize(14),
  },
  titleSection: {
    fontWeight: '700',
    fontSize: normalize(16),
  },
  form: {
    marginTop: normalize(14),
  },
  divider: {
    marginVertical: normalize(16),
  },
});
