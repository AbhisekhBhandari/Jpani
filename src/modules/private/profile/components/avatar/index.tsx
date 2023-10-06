import {styles} from './styles';
import Typography from '@/shared/components/typography';
import {View} from 'react-native';
import React from 'react';

export default function Avatar() {
  return (
    <View style={styles.avatar}>
      <Typography style={styles.avatarText} translate={false}>
        T
      </Typography>
    </View>
  );
}
