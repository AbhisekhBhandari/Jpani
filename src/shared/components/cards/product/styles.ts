import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProduct: {
    width: normalize(106),
    height: normalize(106),
  },
  title: {
    fontWeight: '700',
  },
  description: {
    color: semantic.text.light,
    lineHeight: normalize(20),
    marginTop: normalize(2),
  },
  price: {
    fontWeight: '700',
    fontSize: normalize(15),
  },
  info: {
    height: normalize(106),
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: normalize(10),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export const stylesVertical = StyleSheet.create({
  imageProduct: {
    width: normalize(120),
    height: normalize(106),
  },
  title: {
    fontWeight: '700',
    marginVertical: normalize(10),
  },
  description: {
    color: semantic.text.light,
    lineHeight: normalize(20),
    marginTop: normalize(2),
  },
  price: {
    fontWeight: '700',
    fontSize: normalize(15),
    marginBottom: normalize(10),
  },
  info: {
    justifyContent: 'space-between',
  },
  footer: {
    alignItems: 'flex-start',
  },
});
