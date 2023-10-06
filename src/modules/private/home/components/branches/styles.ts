import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  container: {
    marginRight: normalize(10),
    borderRadius: normalize(10),
    borderWidth: 1,
    borderColor: '#46AC4D', 
    paddingHorizontal: normalize(30),
    paddingVertical: normalize(20),
    marginTop: normalize(10),
  },
  title: {
    fontWeight: '700',
    fontSize: normalize(18),
  },
});
