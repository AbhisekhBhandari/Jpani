import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Header from '@/modules/private/conversation/components/header';
import User from '@/modules/private/profile/components/user';
import Section from '@/modules/private/profile/components/section';
import useProfile from '@/modules/private/profile/hooks/useProfile';
import {normalize} from '@/shared/helpers';
import Icon from '@/shared/components/icon';
import {ChevronRight, Logout} from '@/shared/assets/icons';
import {styles} from './styles';
import Typography from '@/shared/components/typography';
import PaymentMethods from '@/shared/components/paymentMethods';

export default function Profile() {
  const {
    settingsOptions,
    generalOptions,
    openPaymentMethod,
    toggleOpenPaymentMethod,
  } = useProfile();
  return (
    <SafeAreaView style={{flex: 1, paddingTop: normalize(40), backgroundColor: 'white'}}>
      <Header title="general.profile" />

      <ScrollView>
        <View>
          <User />

          <Section options={settingsOptions} title="general.settings" />
          <View style={{marginTop: normalize(28)}} />
          <Section options={generalOptions} title="general.general" />
          <TouchableOpacity style={styles.logout}>
            <View style={styles.innerLogout}>
              <Icon customStyles={styles.iconLogout} icon={Logout} />
              <Typography style={styles.textLogout}>general.logout</Typography>
            </View>
            <View>
              <Icon icon={ChevronRight} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <PaymentMethods
        open={openPaymentMethod}
        onClose={toggleOpenPaymentMethod}
      />
    </SafeAreaView>
  );
}
