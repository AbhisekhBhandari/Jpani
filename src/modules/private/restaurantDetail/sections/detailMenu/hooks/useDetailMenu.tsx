import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '@/shared/components/typography';
import {normalize} from '@/shared/helpers';

export default function useDetailMenu() {
  const menuItems = [
    {
      id: '1',
      name: 'Cooking Level',
      options: [
        {
          id: '1',
          active: false,
          CustomLabel: (
            <View style={styles.item}>
              <Typography style={styles.nameItem}>Medium Rare</Typography>
              <Typography style={styles.nameItem}>Free</Typography>
            </View>
          ),
        },
        {
          id: '2',
          active: true,
          CustomLabel: (
            <View style={styles.item}>
              <Typography style={styles.nameItem}>Medium Well</Typography>
              <Typography style={styles.nameItem}>Free</Typography>
            </View>
          ),
        },
        {
          id: '3',
          active: false,
          CustomLabel: (
            <View style={styles.item}>
              <Typography style={styles.nameItem}>Medium Done</Typography>
              <Typography style={styles.nameItem}>Free</Typography>
            </View>
          ),
        },
      ],
    },
    {
      id: '2',
      name: 'Side Item',
      options: [
        {
          id: '1',
          active: false,
          CustomLabel: (
            <View style={styles.item}>
              <Typography style={styles.nameItem}>Potato</Typography>
              <Typography style={styles.nameItem}>Free</Typography>
            </View>
          ),
        },
        {
          id: '2',
          active: true,
          CustomLabel: (
            <View style={styles.item}>
              <Typography style={styles.nameItem}>Mushroom</Typography>
              <Typography style={styles.nameItem}>Free</Typography>
            </View>
          ),
        },
      ],
    },
  ];
  return {
    menuItems,
  };
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: normalize(56),
    flex: 1,
    marginRight: normalize(10),
  },
  nameItem: {
    fontWeight: '500',
    fontSize: normalize(15),
  },
});
