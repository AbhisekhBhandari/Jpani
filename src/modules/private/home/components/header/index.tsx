import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Typography from '@/shared/components/typography';
import Icon from '@/shared/components/icon';
import {Cart, Search} from '@/shared/assets/icons';
import {normalize} from '@/shared/helpers';
import Input from '@/shared/components/input';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';
import {styles} from './styles';

export default function Header() {
  const navigation = useNavigation<NavigationProps>();

  function goToBag() {
    navigation.navigate('store');
  }
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Typography>general.greeting</Typography>
          <View style={styles.row}>
            <Typography style={styles.adminUserText}>Admin User</Typography>
          </View>
        </View>
        <TouchableOpacity onPress={goToBag} style={styles.cart}>
          <Icon icon={Cart} />
          <View style={styles.containerCounts}>
            <Typography style={styles.coins}>2</Typography>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: normalize(14)}}>
        <Input
          editable={false}
          onPressIn={() => navigation.navigate('search')}
          placeholder="general.simpleSearch"
          leftIcon={<Icon icon={Search} />}
        />
      </View>
    </View>
  );
}
