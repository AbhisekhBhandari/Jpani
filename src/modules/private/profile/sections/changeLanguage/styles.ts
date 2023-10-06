import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(14),
  },
  containerTitle: {
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1,
    paddingHorizontal: normalize(24),
    height: normalize(44),
    justifyContent: 'center',
  },
  title: {
    fontSize: normalize(18),
    fontWeight: '700',
  },
  containerIngredients: {
    paddingHorizontal: normalize(24),
  },
  mt: {
    marginTop: normalize(10),
  },
  containerText: {
    marginLeft: normalize(10),
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(7),
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  option: {
    fontSize: normalize(16),
  },
  value: {
    fontSize: normalize(16),
    marginLeft: normalize(6),
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingVertical: normalize(30),
  },
  containerOptions: {
    paddingHorizontal: normalize(20),
  },
  titleOption: {
    fontSize: normalize(16),
    fontWeight: '700',
  },
});