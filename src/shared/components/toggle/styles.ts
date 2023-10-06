import {Animated, StyleSheet} from 'react-native';
import {semantic} from '../../constants/colors';

export const _styles = (
  toggleWidth: number,
  isEnabled: boolean,
  translateX: Animated.Value,
) =>
  StyleSheet.create({
    container: {
      width: toggleWidth * 2,
      height: toggleWidth,
      borderRadius: toggleWidth / 2,
      backgroundColor: isEnabled
        ? semantic.background.dark
        : 'rgba(156, 166, 169, 0.25)',
      justifyContent: 'center',
      padding: 4,
    },
    innerContainer: {
      width: toggleWidth - 8,
      height: toggleWidth - 8,
      borderRadius: (toggleWidth - 8) / 2,
      backgroundColor: 'white',
      // @ts-ignore
      transform: [{translateX}],
    },
  });
