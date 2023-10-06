import React, { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import Header from "@/modules/private/orderDetails/components/header";
import OrderIdCard from "@/modules/private/orderDetails/components/orderIdCard";
import OrderStatusCard from "@/modules/private/orderDetails/components/orderStatusCard";
import OrderInfoCard from "@/modules/private/orderDetails/components/orderInfoCard";
import OrderReceiptCard from "@/modules/private/orderDetails/components/orderReceiptCard";
import { ScrollView } from "react-native-gesture-handler";
import ActionBtns from "@/modules/private/orderDetails/components/actionBtn";
import { NavigationProps, RouteProps } from "@/shared/routes/stack";
import { supabase } from "@/shared/lib/supabase";
import { IOrders } from "@/shared/lib/interfaces";
interface branchDetailProps {
  route: RouteProps<"orderDetails">;
  navigation: NavigationProps;
}

export default function OrderDetails({ route, navigation }: branchDetailProps) {
  const { id } = route.params;
  const [orders, setOrders] = React.useState<IOrders | null>(null);
  useEffect(() => {
    async function getOrders() {
      const user = await supabase.auth.getUser();
      if (!user.data.user.id) return;
      const response = await supabase
        .from("order_item")
        .select(
          `order_id, item_id, quantity, menu_item!inner(name, price), order!inner(status, estimated_delivery_time, tax_rate, restaurant_id)`
        )
        .eq("order.restaurant_id", user.data.user.id)
        .eq("order_id", id)
        .order("created_at", { ascending: false });

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
        setOrders(dummy[Object.keys(dummy)[0]]);
      }
    }
    if (id) getOrders();
  }, []);

  console.log(orders, "order-details");

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: normalize(40) }}>
      <View style={styles.body}>
        <Header />
        <ScrollView style={styles.mainContainer}>
          {orders ? (
            <>
              <OrderIdCard id={orders.order_id} />
              <OrderStatusCard currentStatus={orders.order.status} />
              <OrderInfoCard time={orders.order.estimated_delivery_time} />
              <OrderReceiptCard
                currency_prefix="AED"
                discount={2}
                total_price={orders.menu_item.reduce(
                  (a, b) => a + b.price * b.quantity,
                  0
                )}
                tax_rate={orders.order.tax_rate}
                item={orders.menu_item}
              />
              <ActionBtns />
            </>
          ) : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
