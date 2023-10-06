import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  avatar: {
    width: normalize(72),
    height: normalize(72),
    backgroundColor: semantic.background.dark,
    padding: normalize(20),
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(10),
  },
  avatarText: {
    color: semantic.text.lightest,
    fontSize: normalize(24),
    fontWeight: '700',
  },
});
