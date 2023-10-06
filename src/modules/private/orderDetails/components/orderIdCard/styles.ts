import {StyleSheet} from 'react-native';
import {semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: semantic.background.white,
    padding: normalize(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(10)
  },
  titleText:{
    fontWeight: "500",
    fontSize: normalize(16)
  },
  orderIdText: {
    fontWeight: "800",
    fontSize: normalize(18),
    marginLeft: normalize(10)
  },
  copyIcon:{
    height: normalize(30),
    width: normalize(30),
    resizeMode: "contain"
  }
});
