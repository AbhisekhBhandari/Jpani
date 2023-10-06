import { StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';
import { osName } from 'expo-device';

export const styles = StyleSheet.create({
  dropDown: {
    borderWidth: 1,
    borderRadius: normalize(28),
    borderColor: semantic.text.default,
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(12),
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: normalize(100),
    justifyContent: 'center',
  },
  containerModal: {
    paddingVertical: normalize(osName.toLowerCase() === 'ios' ? 24 : 10),
  },
  textDropDown: {
    color: semantic.text.default,
    fontWeight: '700',
  },
});
