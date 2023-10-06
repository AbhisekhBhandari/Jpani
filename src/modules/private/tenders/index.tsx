import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, Pressable } from "react-native";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import Header from "@/modules/private/tenders/components/header";
import Filter from "@/modules/private/tenders/components/filter";
import TenderCard from "@/modules/private/tenders/components/tenderCard";
import Icon from "@/shared/components/icon";
import { Plus } from "@/shared/assets/icons";
import { supabase } from "@/shared/lib/supabase";
import { IOrders, ITender } from "@/shared/lib/interfaces";
import { ActivityIndicator } from "react-native";
import { semantic } from "@/shared/constants/colors";
const TENDERS = [
  {
    id: 1,
    logo: require("../../../../assets/restro-logo.jpg"),
    title: "Dror Catering",
    expirydate: "30 SEP 2023, 03:18 PM",
    total: 353.5,
    supplied: 200.0,
    status: "pending",
  },
  {
    id: 2,
    logo: require("../../../../assets/restro-logo.jpg"),
    title: "Dror Catering",
    expirydate: "30 SEP 2023, 03:18 PM",
    total: 353.5,
    supplied: 200.0,
    status: "pending",
  },
  {
    id: 3,
    logo: require("../../../../assets/restro-logo.jpg"),
    title: "Dror Catering",
    expirydate: "30 SEP 2023, 03:18 PM",
    total: 353.5,
    supplied: 200.0,
    status: "pending",
  },
  {
    id: 4,
    logo: require("../../../../assets/restro-logo.jpg"),
    title: "Dror Catering",
    expirydate: "30 SEP 2023, 03:18 PM",
    total: 353.5,
    supplied: 200.0,
    status: "pending",
  },
  {
    id: 5,
    logo: require("../../../../assets/restro-logo.jpg"),
    title: "Dror Catering",
    expirydate: "30 SEP 2023, 03:18 PM",
    total: 353.5,
    supplied: 200.0,
    status: "pending",
  },
];

const filterMapper = {
  pending: "pending",
  effective: "approved",
  rejected: "rejected",
  all: "all",
};

export default function Tenders({ navigation }) {
  const [filter, setFilter] = useState<string>("all");
  const [tenders, setTenders] = React.useState<Record<string, ITender>>({});
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    async function getOrders(filterStatus: boolean, filter: string) {
      const user = await supabase.auth.getUser();
      if (!user.data.user.id) return;
      let response;
      if (filterStatus) {
        response = await supabase
          .from("tender_list")
          .select(
            `id, tender_id, tender_item_id, quantity, tender_item!inner(name, price, category), tender!inner(delivery_interval, status, discount, contract_end_date, delivery_time, restaurant_id)`
          )
          .eq("tender.restaurant_id", user.data.user.id)
          .eq("tender.status", filterMapper[filter])
          .order("created_at", { ascending: false });
      } else {
        response = await supabase
          .from("tender_list")
          .select(
            `id, tender_id, tender_item_id, quantity, tender_item!inner(name, price, category), tender!inner(delivery_interval, status, discount, agreement_price, contract_end_date, delivery_time, restaurant_id)`
          )
          .eq("tender.restaurant_id", user.data.user.id)
          .order("created_at", { ascending: false });
        console.log(response.data);
      }

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
        setLoading(false);
        setTenders(dummy);
      }
    }
    setLoading(true);
    getOrders(filter === "all" ? false : true, filter.toLowerCase());
  }, [filter]);

  const renderList = useCallback(({ item }: { item: (typeof tenders)[0] }) => {
    return (
      <TenderCard
        logo={require("../../../../assets/restro-logo.jpg")}
        key={item.tender_id}
        navigation={navigation}
        title="Dror Catering"
        expirydate={item.tender.contract_end_date}
        total={item.tender_item.reduce((a, b) => a + b.price * b.quantity, 0)}
        currency_prefix="AED"
        status={item.tender.status}
        id={item.tender_id}
        supplied={item.tender_item.reduce(
          (a, b) => a + b.price * b.quantity,
          0
        )}
      />
    );
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: normalize(40), backgroundColor: "white" }}
    >
      <View style={styles.body}>
        <Header />
        <Filter filter={filter} setFilter={setFilter}  />
        {loading ? (
          <View
            style={{
              flex:20,
              backgroundColor: semantic.background.white,
              paddingHorizontal: normalize(18),
              paddingVertical: normalize(14),
              borderRadius: normalize(8),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color={"black"} />
          </View>
        ) : (
          tenders && (
            <>
              <FlatList
                style={styles.orderContainer}
                data={Object.keys(tenders).map((key) => tenders[key])}
                keyExtractor={(item) => item.tender_id}
                renderItem={renderList}
              ></FlatList>
              <Pressable
                style={styles.addTenderBtn}
                onPress={() => {
                  navigation.navigate("createTender");
                }}
              >
                <Icon
                  customStyles={{
                    tintColor: "white",
                    height: normalize(40),
                    width: normalize(40),
                  }}
                  icon={Plus}
                />
              </Pressable>
            </>
          )
        )}
      </View>
    </SafeAreaView>
  );
}
