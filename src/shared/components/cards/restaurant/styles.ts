import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {palette, semantic} from '@/shared/constants/colors';

const colorPromo = palette.secondary.vermilion.base;
const colorInfo = semantic.text.light;
const dot = {
  width: normalize(5),
  height: normalize(5),
  borderRadius: 150,
  backgroundColor: semantic.background.dark,
  marginHorizontal: normalize(8),
};
export const _styles = (checkLocation?: boolean | undefined) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: normalize(checkLocation ? 104 : 82),
      height: normalize(checkLocation ? 104 : 82),
    },
    mainContainerInfo: {
      marginLeft: normalize(20),
    },
    containerInfo: {
      justifyContent: 'space-between',
    },
    promo: {
      color: colorPromo,
      fontWeight: '700',
      fontSize: normalize(13),
    },
    iconPromo: {
      tintColor: colorPromo,
      marginRight: normalize(6),
    },
    dot: {
      ...dot,
    },
    dotPromo: {
      ...dot,
      backgroundColor: colorPromo,
    },
    nameRestaurant: {
      fontWeight: '700',
      fontSize: normalize(18),
      marginBottom: normalize(6),
    },
    managerName: {
      marginLeft: normalize(4),
      fontWeight: '500',
    },
    info: {
      color: colorInfo,
      fontWeight: '700'
    },
    iconStar: {
      tintColor: palette.secondary.lemon.base,
    },
    iconInfo: {
      tintColor: colorInfo,
    },
    checkLocation: {
      justifyContent: 'space-between',
      marginTop: normalize(14),
    },
    free: {
      fontWeight: '700',
      marginHorizontal: normalize(6),
      color: palette.primary.electricBase,
      fontSize: normalize(15),
    },
    deliveryPrice: {
      fontSize: normalize(15),
      textDecorationLine: 'line-through',
    },
    iconSize: {
      width: normalize(22),
      height: normalize(22),
    },
  });
