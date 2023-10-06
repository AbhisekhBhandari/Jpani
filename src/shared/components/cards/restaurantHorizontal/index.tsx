import React from 'react';
import {View, ImageBackground} from 'react-native';
import {normalize} from '@/shared/helpers';
import MainInfoRestaurant from '@/shared/components/infoRestaurant/mainInfoRestaurant';
import {Reviews} from '@/shared/components/infoRestaurant';
import {styles} from './styles';
// burgerphoto
export default function RestaurantHorizontal({discount, reviews}: any) {
  return (
    <View>
      <ImageBackground
        imageStyle={styles.imageProduct}
        resizeMode="cover"
        style={styles.imageProduct}
        source={{
          uri: 'https://i.ibb.co/pK38cCy/mae-mu-I7-A-p-HLc-QK8-unsplash-1.png',
        }}>
        <View style={styles.containerReview}>
          <Reviews />
        </View>
      </ImageBackground>
      <View style={{marginTop: normalize(20)}}>
        <MainInfoRestaurant discount={discount} reviews={reviews} />
      </View>
    </View>
  );
}
