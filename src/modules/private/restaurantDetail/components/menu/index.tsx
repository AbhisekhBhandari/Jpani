import {ScrollView, View} from 'react-native';
import Typography from '@/shared/components/typography';
import React from 'react';
import {styles} from './styles';
import {Product} from '@/shared/components/cards';
import CustomizeMenu from '@/modules/private/restaurantDetail/components/customizeMenu';
import useMenu from '@/modules/private/restaurantDetail/hooks/useMenu';

export default function Menu() {
  const {openCustomizeMenu, addProduct, toggleCustomizeMenu} = useMenu();

  return (
    <View>
      <View style={styles.containerMenu}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={[styles.item, styles.itemActive]}>
            <Typography style={[styles.textMenu, styles.textMenuActive]}>
              All Products
            </Typography>
          </View>
          <View style={styles.item}>
            <Typography style={styles.textMenu}>Steak</Typography>
          </View>
          <View style={styles.item}>
            <Typography style={styles.textMenu}>Kebab</Typography>
          </View>
          <View style={styles.item}>
            <Typography style={styles.textMenu}>Drinks</Typography>
          </View>
          <View style={styles.item}>
            <Typography style={styles.textMenu}>Pastas</Typography>
          </View>
          <View style={styles.item}>
            <Typography style={styles.textMenu}>Extras</Typography>
          </View>
        </ScrollView>
      </View>
      <View style={styles.resultMenu}>
        <View style={{marginVertical: 10}} />
        <Product callback={toggleCustomizeMenu} onSelected />
        <View style={{marginVertical: 10}} />
        <Product callback={addProduct} />
        <View style={{marginVertical: 10}} />
        <Product callback={addProduct} />
        <View style={{marginVertical: 10}} />
        <Product callback={addProduct} />
      </View>
      <CustomizeMenu onClose={toggleCustomizeMenu} show={openCustomizeMenu} />
    </View>
  );
}
