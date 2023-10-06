import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Icon from '@/shared/components/icon';
import {ChevronRight, Close, Smile} from '@/shared/assets/icons';
import Typography from '@/shared/components/typography';

export default function Tooltip() {
  return (
    <>
      <View style={styles.triangle} />
      <View style={styles.container}>
        <Icon customStyles={styles.icon} icon={Smile} />
        <View style={styles.containerText}>
          <Typography style={styles.description}>
            Place an order for later to better maintain your time flexibility.
          </Typography>
          <View style={styles.containerDone}>
            <Typography style={styles.title}>Done</Typography>
            <Icon customStyles={styles.icon} icon={ChevronRight} />
          </View>
        </View>
        <Icon customStyles={styles.icon} icon={Close} />
      </View>
    </>
  );
}
