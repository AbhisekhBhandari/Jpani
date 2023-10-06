import {View} from 'react-native';
import {styles} from './styles';
import Icon from '@/shared/components/icon';
import {Star} from '@/shared/assets/icons';
import Typography from '@/shared/components/typography';
import React from 'react';

export default function Reviews() {
  return (
    <View style={styles.row}>
      <Icon customStyles={styles.iconStar} icon={Star} />
      <Typography style={styles.info} translate={false}>
        4.8 (324)
      </Typography>
    </View>
  );
}
