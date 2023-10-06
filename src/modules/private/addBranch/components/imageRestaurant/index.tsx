import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Icon from '@/shared/components/icon';
import {Information, LeftArrow, Search, Share} from '@/shared/assets/icons';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function ImageRestaurant({restaurant, openInfo}: any) {
  const {goBack} = useNavigation();
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      imageStyle={styles.image}
      source={{uri: restaurant.image}}>
      <View style={styles.containerActions}>
        <TouchableOpacity onPress={goBack} style={styles.btns}>
          <Icon icon={LeftArrow} />
        </TouchableOpacity>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btns}>
            <Icon icon={Search} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btns, styles.divider]}>
            <Icon icon={Share} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openInfo} style={styles.btns}>
            <Icon icon={Information} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
