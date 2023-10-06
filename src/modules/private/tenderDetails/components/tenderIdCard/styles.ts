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
    fontSize: normalize(18)
  },
  tenderIdText: {
    fontWeight: "800",
    marginTop: normalize(10),
    fontSize: normalize(18)
  },
  copyIcon:{
    height: normalize(40),
    width: normalize(40),
    resizeMode: "contain"
  }
});
