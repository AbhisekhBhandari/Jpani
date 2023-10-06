import React from 'react';
import {View} from 'react-native';
import Icon from '@/shared/components/icon';
import {Close, Time} from '@/shared/assets/icons';
import {styles} from './styles';
import Typography from '@/shared/components/typography';
export default function Banner() {
  return (
    <View style={styles.container}>
      <Icon customStyles={styles.icon} icon={Time} />
      <View style={styles.containerText}>
        <Typography style={styles.title}>Scheduled Order</Typography>
        <Typography style={styles.description}>
          Place an order for later to better maintain your time flexibility.
        </Typography>
      </View>
      <Icon customStyles={styles.icon} icon={Close} />
    </View>
  );
}
