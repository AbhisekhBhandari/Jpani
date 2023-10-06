import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(10),
  },
  body: {
    padding: normalize(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ml: {
    marginLeft: normalize(10),
  },
  section: {
    marginTop: normalize(24),
  },
  sizeIcon: {
    width: normalize(36),
    height: normalize(36),
  },
  containerCoins: {
    padding: normalize(20),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: semantic.border.default,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  digitalPayments: {
    marginTop: normalize(20),
  },
  method: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: normalize(64),
    paddingBottom: normalize(14),
    marginTop: normalize(20),
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(20),
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
    paddingBottom: normalize(24),
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textInfo: {
    flex: 1,
  },
  title: {
    fontSize: normalize(15),
    fontWeight: '600',
  },
  description: {
    color: semantic.text.light,
    marginTop: normalize(10),
  },
  iconPaymentMethod: {
    width: normalize(34),
    height: normalize(34),
    borderRadius: 150,
    marginRight: normalize(10),
  },
});
