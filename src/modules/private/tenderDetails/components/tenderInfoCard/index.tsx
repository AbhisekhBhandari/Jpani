import React from "react";
import { View, Image } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";

const TENDERINFO = {
  id: 1,
  logo: require("../../../../../../assets/restro-logo.jpg"),
  title: "Dror Catering",
  expirydate: "30 SEP 2023, 03:18 PM",
  total: 353.5,
  supplied: 200.0,
  status: "pending",
};

export default function TenderInfoCard({ expiry_date }: { expiry_date: string }) {
  return (
    <View style={styles.container}>
      <Typography style={styles.titleText}>Tender Info</Typography>
      <View style={styles.mainContainer}>
        <Typography style={styles.expirydate}>{`Expires on ${expiry_date}`}</Typography>
        <View style={styles.restroDetailsWrapper}>
          <Image
            alt={TENDERINFO.title}
            style={styles.logo}
            source={TENDERINFO.logo}
          />
          <Typography style={styles.title}>{TENDERINFO.title}</Typography>
        </View>
      </View>
    </View>
  );
}
