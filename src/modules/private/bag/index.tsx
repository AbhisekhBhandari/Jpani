import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Product} from '@/shared/components/cards';
import {normalize} from '@/shared/helpers';
import HeaderTitle from '@/shared/components/headerTitle';
import {Button} from '@/shared/components/buttons';
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";

export default function Bag() {
  const navigation = useNavigation<NavigationProps>();
  function goToPay() {
    navigation.navigate('order');
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white',  paddingTop: normalize(40)}}>
      <HeaderTitle title="Cart" />
      <ScrollView>
        <View style={{padding: normalize(24)}}>
          <Product isCart />
          <View style={{marginVertical: 10}} />
          <Product isCart />
        </View>
      </ScrollView>

      <View style={{padding: normalize(24)}}>
        <Button onPress={goToPay} title="Checkout $46.00" />
      </View>
    </SafeAreaView>
  );
}
