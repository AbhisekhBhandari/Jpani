import React from "react";
import { View, Image } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";

export default function OrderIdCard({ id }: { id: string }) {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: "row",
      }}>
        <Typography style={styles.titleText}>order.order_id</Typography>
        <Typography style={styles.orderIdText}>#{id}</Typography>
      </View>
      <Image
        style={styles.copyIcon}
        source={require("@/shared/assets/icons/copy.png")}
      />
    </View>
  );
}
