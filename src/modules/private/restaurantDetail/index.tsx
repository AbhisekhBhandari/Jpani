import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { NavigationProps, RouteProps } from "@/shared/routes/stack";
import ImageRestaurant from "@/modules/private/restaurantDetail/components/imageRestaurant";
import InfoRestaurant from "@/modules/private/restaurantDetail/components/infoRestaurant";
import Menu from "@/modules/private/restaurantDetail/components/menu";
import ButtonSheet from "@/shared/components/buttonSheet";
import Info from "@/modules/private/restaurantDetail/components/info";
import { Button } from "@/shared/components/buttons";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";

interface RestaurantDetailProps {
  route: RouteProps<"restaurantDetail">;
  navigation: NavigationProps;
}
export default function RestaurantDetail({
  route,
  navigation,
}: RestaurantDetailProps) {
  const [openInfo, setOpenInfo] = useState(false);
  if (!route.params) {
    return;
  }
  const { restaurant } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View>
          <ImageRestaurant
            openInfo={() => setOpenInfo(!openInfo)}
            restaurant={restaurant}
          />
          <View>
            <InfoRestaurant />
          </View>
          <Menu />
        </View>
      </ScrollView>
      <View style={styles.buttonNavigationBar}>
        <View style={styles.mt}>
          <Button
            onPress={() => navigation.navigate("orders")}
            title="general.view_cart"
          />
        </View>
      </View>
      <ButtonSheet onClose={() => setOpenInfo(!openInfo)} dispatch={openInfo}>
        <Info />
      </ButtonSheet>
    </SafeAreaView>
  );
}
