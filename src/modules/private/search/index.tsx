import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {normalize} from '@/shared/helpers';
import Input from '@/shared/components/input';
import Icon from '@/shared/components/icon';
import {Close, LeftArrow, Search as SearchIcon} from '@/shared/assets/icons';
import TitleSection from '@/shared/components/titleSection';
import List from '@/shared/components/list';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import TodayPromo from '@/modules/private/home/components/latestOrders';
import OtherFavorites from '@/modules/private/home/components/branches';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';

export default function Search() {
  const [value, setValue] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const {goBack} = useNavigation<NavigationProps>();
  function toggleOpenMenu() {
    setOpenMenu(!openMenu);
  }
  const searchs = [
    {
      id: '1',
      name: 'Steak',
    },
    {
      id: '2',
      name: 'Sushi',
    },
    {
      id: '3',
      name: 'Pasta',
    },
    {
      id: '4',
      name: 'Dessert',
    },
    {
      id: '5',
      name: 'Drikns',
    },
    {
      id: '6',
      name: 'Coffe',
    },
    {
      id: '7',
      name: 'Chicken',
    },
    {
      id: '8',
      name: 'Biryani',
    },
    {
      id: '9',
      name: 'Ramen',
    },
    {
      id: '10',
      name: 'Falafel',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Icon icon={LeftArrow} />
          </TouchableOpacity>
          <View style={{flex: 0.95}}>
            <Input
              onChangeText={text => setValue(text)}
              value={value}
              placeholder="general.search"
              leftIcon={<Icon icon={SearchIcon} />}
              rightIcon={
                value !== '' ? (
                  <TouchableOpacity onPress={() => setValue('')}>
                    <Icon icon={Close} />
                  </TouchableOpacity>
                ) : null
              }
            />
          </View>
        </View>

        {!value && (
          <View style={styles.popular}>
            <TitleSection>general.popularSearch</TitleSection>

            <View style={{height: normalize(120), marginTop: normalize(10)}}>
              <List
                data={searchs}
                rows={4}
                renderItem={item => (
                  <TouchableOpacity
                    onPress={() => setValue(item.name)}
                    style={styles.item}
                    key={item.id}>
                    <Typography style={styles.nameItem} translate={false}>
                      {item.name}
                    </Typography>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        )}

        {value && (
          <View style={{paddingHorizontal: normalize(24)}}>
            <TodayPromo
              onCloseMenu={toggleOpenMenu}
              openMenu={openMenu}
              onPressCard={() => toggleOpenMenu()}
              title="Your search product"
              listHorizontal={false}
              typeCardRestaurant={{
                type: 'horizontal',
                discount: true,
                reviews: true,
                time: true,
                checkLocation: true,
              }}
            />
            <OtherFavorites />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
