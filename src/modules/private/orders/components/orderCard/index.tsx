import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Typography from "@/shared/components/typography";
import { formatDate } from "@/shared/utils";

interface IProps {
  id: string;
  logo: any;
  title: string;
  time: string;
  status: string;
  total: number;
  navigation: any;
  currency_prefix: string;
}

export default function OrderCard(props: IProps) {
  const { id, logo, title, time, status, total, navigation, currency_prefix } =
    props;
  
  return (
    <View style={styles.card}>
      <View style={styles.timeWrapper}>
        <Text style={styles.time}>{formatDate(time)}</Text>
        <Text style={styles.totalPrice}>
          {currency_prefix} {total}
        </Text> 
      </View>
      <View style={styles.restroDetailsWrapper}>
        <Image alt={title} style={styles.logo} source={logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.orderDetailsBtnWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("orderDetails", {
              id: id,
            });
          }}
        >
          <Typography style={styles.orderDetailsBtn}>order.details</Typography>
        </TouchableOpacity>
        <View style={styles.statusText}>
          <Text style={{ color: "white", textTransform: "capitalize" }}>
            {status}
          </Text>
        </View>
      </View>
    </View>
  );
}
