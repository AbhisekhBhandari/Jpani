import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ChevronUpBlack, Chat} from '@/shared/assets/icons';
import Icon from '@/shared/components/icon';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';

export default function ChatWithUs() {
  const navigation = useNavigation<NavigationProps>();

  function goToDetails() {
    navigation.navigate('conversation');
  }
  return (
    <TouchableOpacity
      onPress={goToDetails}
      style={[styles.container, styles.row, styles.between]}>
      <View style={[styles.row]}>
        <Icon customStyles={styles.icon} icon={Chat} />
        <View style={styles.info}>
          <Typography style={styles.title}>general.chatWithUs</Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
}
