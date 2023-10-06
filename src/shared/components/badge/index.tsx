import React from 'react';
import {View} from 'react-native';
import Typography from '@/shared/components/typography';
import {_styles} from '@/shared/components/badge/styles';
import {semantic} from '@/shared/constants/colors';

interface BadgeProps {
  type?: 'success' | 'warning' | 'error';
  value?: string;
}
export default function Badge({value = 'Placeholder', type}: BadgeProps) {
  const bgColors = {
    success: semantic.background.success,
    warning: semantic.background.warning,
    error: semantic.background.error,
  };
  const background = type ? bgColors[type] : semantic.background.dark;
  const styles = _styles(background);
  return (
    <View style={styles.container}>
      <Typography style={styles.text}>{value}</Typography>
    </View>
  );
}
