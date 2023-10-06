import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {_styles} from './styles';
import Typography from '@/shared/components/typography';
import Icon from '@/shared/components/icon';
import {Frame} from '@/shared/assets/icons';
import {normalize} from '@/shared/helpers';

interface SelectProps {
  active?: boolean | undefined;
  pro?: boolean | undefined;
  option?: any | undefined;
}
const defaultOption = {
  title: 'Priority',
  time: '18 Min',
  price: 'FREE',
};
export default function Select({
  active,
  option = defaultOption,
  pro = true,
}: SelectProps) {
  const styles = _styles(active);
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <View style={styles.containerInfo}>
          <Typography style={styles.text}>{option.title}</Typography>
          {pro && <Icon customStyles={styles.icon} icon={Frame} />}
          <View style={styles.dot} />
          <Typography
            style={styles.textNormal}>{`< ${option.time}`}</Typography>
        </View>
        {pro && (
          <View style={{marginTop: normalize(5)}}>
            <Typography style={styles.description}>
              Priority delivery for Tamwenat Pro users
            </Typography>
          </View>
        )}
      </View>
      <View>
        <Typography style={styles.text}>{option.price}</Typography>
      </View>
    </TouchableOpacity>
  );
}
