import React from "react";
import { View, Image } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";

const ORDERINFO = {
  id: 1,
  logo: require("../../../../../../assets/restro-logo.jpg"),
  title: "Dror Catering",
  time: "14 SEP 2023, 03:18 PM",
  total: 353.5,
  status: "new",
};

export default function OrderInfoCard({ time }: { time: string }) {
  return (
    <View style={styles.container}>
      <Typography style={styles.titleText}>order.info</Typography>
      <View style={styles.mainContainer}>
        <View style={styles.restroDetailsWrapper}>
          <Image
            alt={ORDERINFO.title}
            style={styles.logo}
            source={ORDERINFO.logo}
          />
          <Typography style={styles.title}>{ORDERINFO.title}</Typography>
        </View>
        <Typography style={styles.time}>{ time }</Typography>
      </View>
    </View>
  );
}
