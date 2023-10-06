import Typography from '@/shared/components/typography';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export default function TitleSection({children, rightIcon}: any) {
  return (
    <View style={styles.row}>
      <Typography style={styles.titleSection}>{children}</Typography>
      {rightIcon && rightIcon}
    </View>
  );
}
