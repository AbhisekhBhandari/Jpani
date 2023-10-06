import {View} from 'react-native';
import Typography from '@/shared/components/typography';
import Icon from '@/shared/components/icon';
import {Asterisk} from '@/shared/assets/icons';
import React from 'react';
import {normalize} from '@/shared/helpers';
import RadioButtons from '@/shared/components/radioButtons';
import {styles} from './styles';

interface MenuProps {
  name: string;
  pickCount: string;
  subItems: any[];
}
export default function MenuItem({name, pickCount, subItems}: MenuProps) {
  return (
    <View style={[styles.containerSection, styles.mt]}>
      <View style={styles.paddingHorizontal}>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Typography style={styles.sectionTitle} translate={false}>
              {name}
            </Typography>
            <Icon customStyles={styles.icon} icon={Asterisk} />
          </View>
          <Typography translate={false}>Pick {pickCount}</Typography>
        </View>
      </View>

      <View>
        <View style={{paddingHorizontal: normalize(24)}}>
          <RadioButtons options={subItems} columns={1} />
        </View>
      </View>
    </View>
  );
}
