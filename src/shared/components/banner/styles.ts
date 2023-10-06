import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(12),
    backgroundColor: semantic.background.neutral,
    borderRadius: normalize(4),
  },
  containerText: {
    flex: 1,
    marginHorizontal: normalize(12),
  },
  title: {
    color: semantic.text.lightest,
    fontSize: normalize(16),
    fontWeight: '900',
  },
  description: {
    color: semantic.text.lightest,
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  icon: {
    tintColor: semantic.text.lightest,
    width: normalize(28),
    height: normalize(28),
  },
});
