import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import ImageProduct from '@/modules/private/restaurantDetail/sections/detailMenu/components/imageProduct';
import {RouteProps} from '@/shared/routes/stack';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import MenuItem from '@/modules/private/restaurantDetail/sections/detailMenu/components/menuItem';
import useDetailMenu from '@/modules/private/restaurantDetail/sections/detailMenu/hooks/useDetailMenu';
import Counter from '@/shared/components/counter';
import {Button} from '@/shared/components/buttons';
import Input from '@/shared/components/input';
import Icon from '@/shared/components/icon';
import {Transaction} from '@/shared/assets/icons';

interface DetailMenuProps {
  route: RouteProps<'detailMenu'>;
}
export default function DetailMenu({route}: DetailMenuProps) {
  const {menuItems} = useDetailMenu();
  if (!route.params) {
    return;
  }
  const {product} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View>
          <ImageProduct product={product} />

          <View>
            <View style={styles.containerSection}>
              <Typography translate={false} style={styles.name}>
                Beef Fillet Steak
              </Typography>

              <Typography translate={false} style={styles.description}>
                Beef fillet steak is a tender and juicy cut of meat that comes
                from the tenderloin of a cow. It is a lean cut with very little
                fat
              </Typography>
              <Typography translate={false} style={styles.price}>
                $ 25.00
              </Typography>
            </View>

            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                subItems={item.options}
                name={item.name}
                pickCount="1"
              />
            ))}

            <View style={[styles.containerSection, styles.mt]}>
              <Typography style={styles.sectionTitle}>general.notes</Typography>
              <Input
                leftIcon={<Icon icon={Transaction} />}
                placeholder="restaurant.detail_menu.notes_message"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonNavigationBar}>
        <View style={styles.rowBetween}>
          <View>
            <Typography style={styles.totalText}>general.total</Typography>
            <Typography style={styles.totalPrice}>$ 25.00</Typography>
          </View>
          <Counter />
        </View>
        <View style={styles.mt}>
          <Button title="Done" />
        </View>
      </View>
    </SafeAreaView>
  );
}
