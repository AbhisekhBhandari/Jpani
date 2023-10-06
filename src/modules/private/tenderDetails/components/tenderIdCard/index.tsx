import React from "react";
import { View, Image } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";

export default function TenderIdCard({ id }: { id: string }) {
  return (
    <View style={styles.container}>
      <View>
        <Typography style={styles.titleText}>Tender ID: </Typography>
        <Typography style={styles.tenderIdText}>{ id }</Typography>
      </View>
      <Image
        style={styles.copyIcon}
        source={require("@/shared/assets/icons/copy.png")}
      />
    </View>
  );
}
