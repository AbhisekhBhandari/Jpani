import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Typography from '@/shared/components/typography';
import Badge from '@/shared/components/badge';
import {_styles} from './styles';

interface CardRadioButtonProps {
  active?: boolean | undefined;
}

export default function CardRadioButton({active}: CardRadioButtonProps) {
  const styles = _styles(active);
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Typography style={styles.title}>MONTHLY</Typography>
        <Typography style={styles.price}>$29.99/month</Typography>
        <Badge value="Two weeks free trial" />
        <Typography style={styles.message}>
          Billed every month, cancel anytime!
        </Typography>
      </View>
      <View>
        <View style={styles.containerRadioButton}>
          <View style={styles.innerRadioButton} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
