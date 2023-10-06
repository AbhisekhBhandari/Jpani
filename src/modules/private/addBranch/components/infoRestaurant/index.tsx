import Typography from '@/shared/components/typography';
import {View} from 'react-native';
import Icon from '@/shared/components/icon';
import {Frame, Star, Time} from '@/shared/assets/icons';
import React from 'react';
import {styles} from './styles';

export default function InfoRestaurant() {
  return (
    <View style={styles.containerInfo}>
      <Typography style={styles.title} translate={false}>
        Sizzling Steaks, Gandaria City
      </Typography>
      <Typography style={styles.category}>Steak, Grill</Typography>

      <View style={[styles.row, styles.time]}>
        <View style={styles.row}>
          <Icon customStyles={[styles.icon, styles.iconSize]} icon={Star} />
          <Typography style={styles.text}>Dubai Mall</Typography>
        </View>
      </View>

      <View style={styles.row}>
        <Icon customStyles={styles.iconSize} icon={Frame} />
        <Typography style={styles.free}>Branch Manager: </Typography>
        <Typography style={styles.text}>Mohammad</Typography>
      </View>
    </View>
  );
}
