import React from 'react';
import Typography from '@/shared/components/typography';
import {View} from 'react-native';
import {styles} from './styles';
import Item, {
  ItemSectionProfile,
} from '@/modules/private/profile/components/item';

interface SectionProps {
  title: string;
  options: ItemSectionProfile[];
}

export default function Section({title, options}: SectionProps) {
  return (
    <View>
      <Typography style={styles.titleSection}>{title}</Typography>

      <View>
        {options.map(option => (
          <Item
            key={option.id}
            title={option.title}
            id={option.id}
            callback={option.callback}
          />
        ))}
      </View>
    </View>
  );
}
