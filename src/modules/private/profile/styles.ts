import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  logout: {
    padding: normalize(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerLogout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLogout: {
    tintColor: semantic.text.error,
    width: normalize(24),
    height: normalize(24),
  },
  textLogout: {
    color: semantic.text.error,
    fontWeight: '700',
  },
});
