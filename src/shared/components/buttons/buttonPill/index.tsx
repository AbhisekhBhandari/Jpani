import React from 'react';
import {TouchableOpacity} from 'react-native';
import {_styles} from './styles';
import Typography from '@/shared/components/typography';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';

interface ButtonProps {
  disabled?: boolean | undefined;
  outline?: boolean | undefined;
  leftIcon?: React.ReactNode | undefined;
  rightIcon?: React.ReactNode | undefined;
  title?: string | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
export default function ButtonPill({
  disabled,
  outline,
  title,
  leftIcon,
  rightIcon,
  onPress,
}: ButtonProps) {
  const styles = _styles(disabled);
  if (outline) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.containerOutline}>
        {leftIcon && leftIcon}
        {title && <Typography style={styles.textOutline}>{title}</Typography>}
        {rightIcon && rightIcon}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {leftIcon && leftIcon}
      {title && <Typography style={styles.text}>{title}</Typography>}
      {rightIcon && rightIcon}
    </TouchableOpacity>
  );
}
