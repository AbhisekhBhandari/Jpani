import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from '@/shared/components/icon';
import {ChevronRight} from '@/shared/assets/icons';
import Typography from '@/shared/components/typography';
import {_styles} from './styles';

interface ButtonColumnProps {
  disabled?: boolean | undefined;
  outline?: boolean | undefined;
}
export default function ButtonColumn({disabled, outline}: ButtonColumnProps) {
  const styles = _styles(disabled);
  if (outline) {
    return (
      <TouchableOpacity style={styles.containerOutline}>
        <View>
          <Typography style={styles.textItemOutline}>2 Items</Typography>
          <Typography style={styles.textCategoryOutline}>
            Ganadaria City Outlet
          </Typography>
        </View>
        <View style={styles.containerPrice}>
          <Typography style={styles.priceOutline}>$ 2.392</Typography>
          <Icon customStyles={styles.iconOutline} icon={ChevronRight} />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Typography style={styles.textItem}>2 Items</Typography>
        <Typography style={styles.textCategory}>
          Ganadaria City Outlet
        </Typography>
      </View>
      <View style={styles.containerPrice}>
        <Typography style={styles.price}>$ 2.392</Typography>
        <Icon customStyles={styles.icon} icon={ChevronRight} />
      </View>
    </TouchableOpacity>
  );
}
