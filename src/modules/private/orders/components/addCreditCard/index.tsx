import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Icon from '@/shared/components/icon';
import {LeftArrow, PaymentCard} from '@/shared/assets/icons';
import Typography from '@/shared/components/typography';
import Input from '@/shared/components/input';
import {normalize} from '@/shared/helpers';
import {styles} from './styles';
import {Button} from '@/shared/components/buttons';
import {useNavigation} from '@react-navigation/native';

export default function AddCreditCard() {
  const {goBack} = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, paddingTop: normalize(40)}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Icon icon={LeftArrow} />
          </TouchableOpacity>
          <Typography style={styles.title}>Add card</Typography>
        </View>

        <View style={styles.body}>
          <Input
            label="Card number"
            leftIcon={<Icon icon={PaymentCard} />}
            placeholder="419293919293922"
          />

          <View style={styles.spancer}>
            <View style={{flex: 0.45}}>
              <Input placeholder="01/12" label="Due date" />
            </View>
            <View style={{flex: 0.45}}>
              <Input placeholder="000" label="Cvv" />
            </View>
          </View>

          <View>
            <Input label="Zip code" />
          </View>

          <View style={{marginTop: normalize(20)}}>
            <Button title="general.done" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}