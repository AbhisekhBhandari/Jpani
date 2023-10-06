import Typography from '@/shared/components/typography';
import {styles} from './styles';
import React from 'react';

export default function Time() {
  return (
    <Typography style={styles.info} translate={false}>
      Closes in
    </Typography>
  );
}
