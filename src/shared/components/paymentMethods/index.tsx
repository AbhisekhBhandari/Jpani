import React from 'react';
import ButtonSheet from '@/shared/components/buttonSheet';
import {Image, View} from 'react-native';
import {normalize} from '@/shared/helpers';
import TitleSection from '@/shared/components/titleSection';
import {CreditCard, Paypal} from '@/shared/assets/icons';
import Typography from '@/shared/components/typography';
import RadioButtons from '@/shared/components/radioButtons';
import {styles} from './styles';
import ButtonPill from '@/shared/components/buttons/buttonPill';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';

export default function PaymentMethods({open, onClose}: any) {
  const navigation = useNavigation<NavigationProps>();
  return (
    <ButtonSheet onClose={onClose} dispatch={open}>
      <View style={styles.container}>
        <View
          style={{
            height: normalize(44),
            paddingHorizontal: normalize(20),
            justifyContent: 'center',
          }}>
          <TitleSection>Select payment</TitleSection>
        </View>

        <View style={styles.body}>
          {/*
          <View style={styles.containerCoins}>
            <View style={styles.innerContainer}>
              <View style={styles.row}>
                <Icon customStyles={styles.sizeIcon} icon={FoodlamCoins} />
                <View style={styles.ml}>
                  <Typography>Foodlam Coins</Typography>
                  <Typography style={styles.title}>32.000 coins</Typography>
                </View>
              </View>
              <Toggle isEnabled={true} setIsEnabled={() => {}} />
            </View>
            <Typography style={styles.description}>
              Combine foodlam coins with other payment methods
            </Typography>
          </View>
          */}

          <View style={styles.digitalPayments}>
            <View>
              <TitleSection>Digital payment methods</TitleSection>
            </View>

            <RadioButtons
              columns={1}
              options={[
                {
                  id: '1',
                  active: false,
                  CustomLabel: (
                    <View style={styles.method}>
                      <View style={styles.row}>
                        <Image
                          source={{uri: 'https://i.ibb.co/2FsSfz8/Icons.png'}}
                          style={styles.iconPaymentMethod}
                        />
                        <View>
                          <Typography style={styles.title}>
                            Apple Pay
                          </Typography>
                          <Typography style={styles.description}>
                            na*********@gmail.com
                          </Typography>
                        </View>
                      </View>
                    </View>
                  ),
                },
                {
                  id: '2',
                  active: true,
                  CustomLabel: (
                    <View style={styles.method}>
                      <View style={styles.row}>
                        <Image
                          source={{uri: 'https://i.ibb.co/rML6gnm/Icon.png'}}
                          style={styles.iconPaymentMethod}
                        />
                        <View>
                          <Typography style={styles.title}>Visa</Typography>
                          <Typography style={styles.description}>
                            *********09
                          </Typography>
                        </View>
                      </View>
                    </View>
                  ),
                },
              ]}
            />
          </View>

          <View style={styles.section}>
            <TitleSection>Add payment methods</TitleSection>

            <View style={{marginTop: 10}}>
              <View style={styles.option}>
                <View style={styles.containerInfo}>
                  <Image source={CreditCard} style={styles.iconPaymentMethod} />
                  <View style={styles.textInfo}>
                    <Typography style={styles.title}>
                      Credit card / Debit
                    </Typography>
                    <Typography style={styles.description}>
                      Combine foodlam point with other payment methods
                    </Typography>
                  </View>
                </View>
                <ButtonPill
                  onPress={() => {
                    onClose();
                    navigation.navigate('addCreditCard');
                  }}
                  outline
                  title="general.add"
                />
              </View>

              <View style={styles.option}>
                <View style={styles.containerInfo}>
                  <Image source={Paypal} style={styles.iconPaymentMethod} />
                  <View style={styles.textInfo}>
                    <Typography translate={false} style={styles.title}>
                      Paypal
                    </Typography>
                    <Typography style={styles.description}>
                      Combine foodlam point with other payment methods
                    </Typography>
                  </View>
                </View>
                <ButtonPill outline title="general.add" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ButtonSheet>
  );
}
