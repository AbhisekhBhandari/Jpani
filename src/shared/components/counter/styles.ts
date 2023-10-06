import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

const btn = {
  width: normalize(24),
  height: normalize(24),
};

const icons = {
  width: normalize(16),
  height: normalize(16),
};
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: normalize(18),
    marginHorizontal: normalize(8),
    width: normalize(24),
    textAlign: 'center',
    alignSelf: 'center',
  },
  btnReduce: {
    ...btn,
    borderColor: semantic.border.default,
    borderWidth: 1,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAument: {
    ...btn,
    backgroundColor: semantic.background.dark,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    ...icons,
    tintColor: semantic.border.default,
  },
  plus: {
    ...icons,
    tintColor: semantic.text.lightest,
  },
});
