import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Icon from '@/shared/components/icon';
import {ChevronBottom, LeftArrow} from '@/shared/assets/icons';
import Typography from '@/shared/components/typography';
import ButtonPill from '@/shared/components/buttons/buttonPill';
import {useNavigation} from '@react-navigation/native';
import Avatar from '@/modules/private/profile/components/avatar';
import Input from '@/shared/components/input';
import PaymentMethods from '@/shared/components/paymentMethods';
import { normalize } from '@/shared/helpers';

function renderLeftIcon() {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <Typography style={{fontWeight: '600'}}>+971</Typography>
      <Icon icon={ChevronBottom} />
    </View>
  );
}
export default function EditProfile() {
  const {goBack} = useNavigation();
  return (
    <SafeAreaView style={{paddingTop: normalize(40)}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Icon icon={LeftArrow} />
        </TouchableOpacity>
        <Typography style={styles.title}>Account</Typography>
        <ButtonPill title="Save" />
      </View>

      <ScrollView style={styles.body}>
        <View>
          <View style={styles.containerAvatar}>
            <Avatar />
          </View>

          <View style={styles.profiles}>
            <Typography style={styles.titleSection}>Profiles</Typography>
            <View style={styles.form}>
              <Input label="Username" placeholder="Tamwenat" />
              <View style={styles.divider}>
                <Input
                  label="Email address"
                  placeholder="contact@tamwenat.com"
                />
              </View>
              <Input
                leftIcon={renderLeftIcon()}
                label="Mobile phone"
                placeholder="3009288182"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
