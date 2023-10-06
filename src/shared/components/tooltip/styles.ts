import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(12),
    backgroundColor: semantic.background.neutral,
    flex: 1,
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
  containerDone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: normalize(30) / 2,
    borderRightWidth: normalize(30) / 2,
    borderBottomWidth: normalize(20),
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: semantic.background.neutral,
    position: 'absolute',
    top: 0,
    left: 10,
  },
});
