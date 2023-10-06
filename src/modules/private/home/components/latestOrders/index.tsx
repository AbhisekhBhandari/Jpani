import React, { useEffect } from "react";
import { View, ScrollView, Image } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";
import { normalize } from "react-native-elements";
import { Price } from "@/shared/components/infoRestaurant";
import { supabase } from "@/shared/lib/supabase";
import { IOrders } from "@/shared/lib/interfaces";

interface ConfigCardRestaurant {
  type?: "vertical" | "horizontal";
  discount?: boolean | undefined;
  reviews?: boolean | undefined;
  time?: boolean | undefined;
  checkLocation?: boolean | undefined;
}
interface LatestOrderProps {
  title?: string | undefined;
  typeCardRestaurant?: ConfigCardRestaurant;
  listHorizontal?: boolean | undefined;
  onPressCard?: ((event: string) => void) | undefined;
  openMenu?: boolean | undefined;
  onCloseMenu?: any;
}

const SingleOrder: React.FC<{ order_status: string; price: number }> = ({
  order_status,
  price,
}) => {
  return (
    <View style={{ marginRight: normalize(10) }}>
      <Image
        resizeMode="cover"
        style={{
          height: normalize(130),
          width: normalize(180),
          borderRadius: normalize(8),
        }}
        source={{
          uri: "https://healthpayerintelligence.com/images/site/article_headers/_normal/2021-01-27_GettyImages-1128687123.jpg",
        }}
      />
      <View style={{ paddingVertical: normalize(10), gap: 6 }}>
        <Typography style={{ fontWeight: "500" }}>{order_status}</Typography>
        <Typography style={{ fontWeight: "700", fontSize: normalize(16) }}>
          Veggies
        </Typography>
        <Price price={price && price.toString()} />
      </View>
    </View>
  );
};

export default function LatestOrders({
  title = "general.latest_orders",
  onPressCard,
}: LatestOrderProps) {
  const [orders, setOrders] = React.useState<Record<string, IOrders>>({});
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
        .order("created_at", { ascending: false })
        .limit(10);

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
      }
    }
    getOrders();
  }, []);

  return (
    <View style={styles.container}>
      <Typography style={styles.title}>{title}</Typography>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.containerList}
        horizontal={true}
      >
        {Object.keys(orders).map((order) => (
          <SingleOrder
            key={orders[order].order_id}
            order_status={orders[order].order.status.toUpperCase()}
            price={orders[order].menu_item.reduce(
              (a, b) => a + b.price * b.quantity,
              0
            )}
          />
        ))}
      </ScrollView>
    </View>
  );
}
