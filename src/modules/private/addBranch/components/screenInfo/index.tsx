import React from 'react';
import {View} from 'react-native';
import Typography from '@/shared/components/typography';
import {styles} from './styles';

interface ScreenInfoProps {
  title: string;
  description: string;
}

export default function ScreenInfo({title, description}: ScreenInfoProps) {
  return (
    <View style={styles.container}>
      <Typography style={styles.title}>{title}</Typography>
      <Typography style={styles.description}>{description}</Typography>
    </View>
  );
}
