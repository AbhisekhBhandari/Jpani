import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import HeaderTitle from '@/shared/components/headerTitle';
import Chat from '@/modules/private/chats/components/chat';
import {semantic} from '@/shared/constants/colors';
import { normalize } from '@/shared/helpers';

export default function Chats() {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: normalize(40), backgroundColor: semantic.background.white}}>
      <HeaderTitle title="general.chats" />

      <ScrollView>
        <View style={{flex: 1}}>
          <Chat />
          <Chat />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
