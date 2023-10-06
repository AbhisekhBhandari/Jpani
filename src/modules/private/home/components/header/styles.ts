import { StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import { semantic } from "@/shared/constants/colors";
import { osName } from 'expo-device';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  adminUserText: {
    fontWeight: '700',
    fontSize: normalize(18),
  },
  containerCounts: {
    position: 'absolute',
    backgroundColor: semantic.background.dark,
    padding: normalize(3),
    width: normalize(17),
    height: normalize(17),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(40),
    right: normalize(-6),
    top: normalize(-5),
  },
  coins: {
    fontWeight: '700',
    fontSize: normalize(osName.toLowerCase() === 'ios' ? 8 : 10),
    color: 'white',
  },
  cart: {
    position: 'relative',
    marginRight: normalize(20)
  },
});
