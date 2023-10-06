import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View, FlatList } from "react-native";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import Header from "@/modules/private/orders/components/header";
import Filter from "@/modules/private/orders/components/filter";
import OrderCard from "@/modules/private/orders/components/orderCard";
import { supabase } from "@/shared/lib/supabase";
import { IOrders } from "@/shared/lib/interfaces";
import { ActivityIndicator } from "react-native";
import { semantic } from "@/shared/constants/colors";

const filterMapper = {
  new: "new",
  in_delivery: "in-delivery",
  completed: "delivered",
}

export default function Orders({ navigation }) {
  const [filter, setFilter] = useState<string>("all");
  const [orders, setOrders] = React.useState<Record<string, IOrders>>({});
  const [loading, setLoading] = React.useState<boolean>(true)

  console.log('orders', orders);
  
  useEffect(() => {
    async function getOrders(filterStatus: boolean, filter: string) {
      // console.log(filter, "filter");
      const user = await supabase.auth.getUser();
      if (!user.data.user.id) return;
      let response;
      if (filterStatus) {
        response = await supabase
          .from("order_item")
          .select(
            `order_id, item_id, quantity, menu_item!inner(name, price), order!inner(status, estimated_delivery_time, tax_rate, restaurant_id)`
          )
          .eq("order.restaurant_id", user.data.user.id)
          .eq("order.status", filterMapper[filter])
          .order("created_at", { ascending: false });
      } else {
        response = await supabase
          .from("order_item")
          .select(
            `order_id, item_id, quantity, menu_item!inner(name, price), order!inner(status, estimated_delivery_time, tax_rate, restaurant_id)`
          )
          .eq("order.restaurant_id", user.data.user.id)
          .order("created_at", { ascending: false });
      }

      if (response.data && !response.error) {
        const { data } = response;
        const dummy = {};

        data.forEach((item, index) => {
          if (!dummy[item.order_id]) {
            dummy[item.order_id] = {
              ...item,
              menu_item: [{ ...item.menu_item, quantity: item.quantity }],
            };
          } else {
            // console.log(dummy[item.order_id].menu_item, "check");
            // console.log(item.menu_item, "check menu_item item.menuitem");
            const menu = [...dummy[item.order_id].menu_item];
            const new_item = { ...item.menu_item, quantity: item.quantity };
            menu.push(new_item);
            dummy[item.order_id].menu_item.push(new_item);
          }
        });
        
        setOrders(dummy as any);
        setLoading(false)
      
      }
    }
    setLoading(true)
    getOrders(filter === "all" ? false : true, filter.toLowerCase());
  }, [filter]);

  const renderList = useCallback(({ item }: { item: (typeof orders)[0] }) => {
    return (
      <OrderCard
        id={item.order_id}
        logo={require("../../../../assets/restro-logo.jpg")}
        key={item.order_id}
        navigation={navigation}
        title="Dror Catering"
        time={item.order.estimated_delivery_time}
        total={item.menu_item.reduce((a, b) => a + b.price * b.quantity, 0)}
        currency_prefix="AED"
        status={item.order.status.toUpperCase()}
      />
    );
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: normalize(40), backgroundColor: "white" }}
    >
      <View style={styles.body}>
        <Header />
        <Filter filter={filter} setFilter={setFilter} />
        {
          loading ? 
          <View style={{
            backgroundColor:semantic.background.white,
            paddingHorizontal: normalize(18),
            paddingVertical: normalize(14),
            borderRadius: normalize(8),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ActivityIndicator size="large" color={"black"} />
          </View>
          :
        <FlatList
          style={styles.orderContainer}
          data={Object.keys(orders).map((order) => orders[order])}
          keyExtractor={(item) => item.order_id.toString()}
          renderItem={renderList}
        ></FlatList>
        }
      </View>
    </SafeAreaView>
  );
}
