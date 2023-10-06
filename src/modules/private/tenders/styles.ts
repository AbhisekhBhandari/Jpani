import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  orderContainer:{
    backgroundColor: "white"
  },
  addTenderBtn: {
    padding: normalize(10),
    backgroundColor: 'red',
    position:'absolute',
    bottom: normalize(15),
    right: normalize(15),
    borderRadius: normalize(100),
    elevation: 10,
  }
});
