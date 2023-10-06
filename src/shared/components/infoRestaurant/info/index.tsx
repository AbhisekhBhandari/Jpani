import {View} from 'react-native';
import {styles} from './styles';
import React from 'react';
import Time from '../time';
import Distance from '../distance';
import Reviews from '../reviews';

export default function InfoRestaurant({
  reviews,
  distance = true,
  time = true,
}: any) {
  return (
    <View style={styles.row}>
      {time && <Time />}
      {distance && (
        <>
          <View style={styles.dot} />
          <Distance />
        </>
      )}

      {reviews && (
        <>
          <View style={styles.dot} />
          <Reviews />
        </>
      )}
    </View>
  );
}
