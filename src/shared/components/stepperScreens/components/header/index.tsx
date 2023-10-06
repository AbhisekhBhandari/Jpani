import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from '@/shared/components/icon';
import {LeftArrow} from '@/shared/assets/icons';
import {_styles} from './styles';
import ButtonPill from '@/shared/components/buttons/buttonPill';
import {useNavigation} from '@react-navigation/native';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';

interface NavbarProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  progress: number;
}

export default function Navbar({onPress, progress}: NavbarProps) {
  const {goBack} = useNavigation();
  const styles = _styles(progress);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress || goBack} style={{flex: 0.2}}>
        <Icon icon={LeftArrow} />
      </TouchableOpacity>
      <View style={styles.containerProgress}>
        <View style={styles.progress} />
      </View>
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <ButtonPill title="general.help" outline />
      </View>
    </View>
  );
}
