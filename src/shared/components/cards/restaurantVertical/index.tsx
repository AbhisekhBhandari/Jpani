import React from 'react';
import {View, ImageBackground} from 'react-native';
import {normalize} from '@/shared/helpers';
import MainInfoRestaurant from '@/shared/components/infoRestaurant/mainInfoRestaurant';
import {styles} from './styles';

//burgerphoto
export default function RestaurantVertical({discount, reviews, time}: any) {
  return (
    <View>
      <ImageBackground
        imageStyle={styles.imageProduct}
        resizeMode="cover"
        style={styles.imageProduct}
        source={{
          uri: 'https://healthpayerintelligence.com/images/site/article_headers/_normal/2021-01-27_GettyImages-1128687123.jpg',
        }}
      />
      <View
        style={{
          marginTop: normalize(10),
          width: normalize(180),
        }}>
        <MainInfoRestaurant time={time} discount={discount} reviews={reviews} />
      </View>
    </View>
  );
}
