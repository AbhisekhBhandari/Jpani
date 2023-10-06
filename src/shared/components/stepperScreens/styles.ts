import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  stepIndicator: {
    backgroundColor: 'red',
    height: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnActive: {
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDisable: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 150,
    backgroundColor: '#a1a1a1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
