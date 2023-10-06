import React, { useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import Header from "@/modules/private/tenderDetails/components/header";
import TenderIdCard from "@/modules/private/tenderDetails/components/tenderIdCard";
import TenderStatusCard from "@/modules/private/tenderDetails/components/tenderStatusCard";
import TenderInfoCard from "@/modules/private/tenderDetails/components/tenderInfoCard";
import TenderReceiptCard from "@/modules/private/tenderDetails/components/tenderReceiptCard";
import { ScrollView } from "react-native-gesture-handler";
import ActionBtns from "@/modules/private/tenderDetails/components/actionBtn";
import { IOrders, ITender } from "@/shared/lib/interfaces";
import { supabase } from "@/shared/lib/supabase";
import OrderReceiptCard from "@/modules/private/tenderDetails/components/tenderReceiptCard";
import { NavigationProps, RouteProps } from "@/shared/routes/stack";

const filterMapper = {};

interface TenderDetailsProps {
  route: RouteProps<"tenderDetails">;
  navigation: NavigationProps;
}

export default function OrderDetails({
  route,
  navigation,
}: TenderDetailsProps) {
  const [filter, setFilter] = useState<string>("all");
  const [tenders, setTenders] = React.useState<ITender | null>(null);
  const { id } = route.params;
  useEffect(() => {
    async function getOrders() {
      const user = await supabase.auth.getUser();
      if (!user.data.user.id) return;
      const response = await supabase
        .from("tender_list")
        .select(
          `id, tender_id, tender_item_id, quantity, tender_item!inner(name, price, category), tender!inner(delivery_interval, status, discount, agreement_price, contract_end_date, delivery_time, restaurant_id)`
        )
        .eq("tender.restaurant_id", user.data.user.id);

      if (response.data && !response.error && response.data.length > 0) {
        const { data } = response;
        const dummy = {};

        data.forEach((item, index) => {
          if (!dummy[item.tender_id]) {
            dummy[item.tender_id] = {
              ...item,
              tender_item: [
                {
                  ...item.tender_item,
                  quantity: item.quantity,
                  id: Math.floor(Math.random() * 100000000).toString(),
                },
              ],
            };
          } else {
            const menu = [...dummy[item.tender_id].tender_item];
            const new_item = { ...item.tender_item, quantity: item.quantity };
            menu.push(new_item);
            dummy[item.tender_id].tender_item.push(new_item);
          }
        });
        setTenders(dummy[Object.keys(dummy)[0]]);
      }
    }
    if (id) getOrders();
  }, [id]);
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: normalize(40) }}>
      <View style={styles.body}>
        <Header />
        {tenders && (
          <ScrollView style={styles.mainContainer}>
            <TenderIdCard id={"#00" + tenders.id.toString()} />
            <TenderStatusCard currentStatus={"approved"} />
            <TenderInfoCard expiry_date={tenders.tender.contract_end_date}/>
            <TenderReceiptCard
              currency_prefix="AED"
              discount={2}
              total_price={tenders.tender_item.reduce(
                (a, b) => a + b.price * b.quantity,
                0
              )}
              tax_rate={2.5}
              item={tenders.tender_item}
            />
            <ActionBtns />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
