import React from 'react';
import {TouchableOpacity} from 'react-native';
import {_styles} from './styles';
import Icon from '@/shared/components/icon';
import {Plus} from '@/shared/assets/icons';

interface ButtonIconProps {
  disabled?: boolean | undefined;
  outline?: boolean | undefined;
}
export default function ButtonIcon({disabled, outline}: ButtonIconProps) {
  const styles = _styles(disabled);
  if (outline) {
    return (
      <TouchableOpacity style={styles.containerOutline}>
        <Icon customStyles={styles.iconOutline} icon={Plus} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container}>
      <Icon customStyles={styles.icon} icon={Plus} />
    </TouchableOpacity>
  );
}
