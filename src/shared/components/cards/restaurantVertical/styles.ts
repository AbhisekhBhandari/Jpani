import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  imageProduct: {
    height: normalize(130),
    width: normalize(180),
    borderTopRightRadius: normalize(8),
    borderTopLeftRadius: normalize(8),
  },
  containerReview: {
    backgroundColor: semantic.background.light,
    alignSelf: 'flex-end',
    paddingVertical: normalize(3),
    paddingHorizontal: 4,
    borderRadius: normalize(8),
    marginTop: normalize(10),
    marginRight: normalize(10),
  },
});
