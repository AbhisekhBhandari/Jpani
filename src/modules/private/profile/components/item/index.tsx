import React from 'react';
import Typography from '@/shared/components/typography';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from '@/shared/components/icon';
import {ChevronRight} from '@/shared/assets/icons';

export interface ItemSectionProfile {
  id: string;
  callback: () => void;
  title: string;
}
export default function Item({title, callback}: ItemSectionProfile) {
  return (
    <TouchableOpacity onPress={callback} style={styles.container}>
      <Typography style={styles.title} translate={false}>
        {title}
      </Typography>
      <View>
        <Icon icon={ChevronRight} />
      </View>
    </TouchableOpacity>
  );
}
