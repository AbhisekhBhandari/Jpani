import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(20),
  },
  containerInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
  },
  title: {
    fontSize: normalize(18),
    fontWeight: '700',
  },
  rowBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    width: normalize(5),
    height: normalize(5),
    backgroundColor: semantic.background.dark,
    borderRadius: 150,
    marginHorizontal: normalize(6),
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    paddingHorizontal: normalize(20),
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E9E9E9',
    marginVertical: 10,
  },
  containerLocation: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    marginVertical: normalize(20),
  },
  containerTime: {
    paddingHorizontal: normalize(20),
  },
  spancer: {
    marginTop: normalize(10),
  },
  innerContainerTime: {
    flex: 1,
    paddingHorizontal: normalize(10),
  },
  containerTitleTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLocation: {
    flex: 1,
    fontWeight: '500',
    paddingHorizontal: normalize(10),
  },
  iconSize: {
    width: normalize(24),
    height: normalize(24),
  },
  text: {
    fontWeight: '500',
  },
});
