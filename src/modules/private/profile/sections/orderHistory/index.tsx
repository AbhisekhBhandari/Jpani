import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Header from '@/modules/private/conversation/components/header';
import {semantic} from '@/shared/constants/colors';
import Typography from '@/shared/components/typography';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';
import { normalize } from "@/shared/helpers";

export default function OrderHistory() {
  const navigation = useNavigation<NavigationProps>();
  function goToDetails() {
    navigation.navigate('orderComplete');
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: semantic.background.white}}>
      <Header title="Order history" />
      <ScrollView style={{padding: normalize(24)}}>
        <View>
          <TouchableOpacity onPress={goToDetails}>
            <Typography>Sizziling Sterak</Typography>
          </TouchableOpacity>
          <View style={{marginVertical: normalize(20)}} />
          <TouchableOpacity onPress={goToDetails}>
            <Typography>Sizziling Sterak</Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
