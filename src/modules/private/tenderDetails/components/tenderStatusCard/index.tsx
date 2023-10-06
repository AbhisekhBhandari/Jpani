import React from "react";
import { View, Image } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";

const filters = {
  pending: "Pending",
  effective: "Effective",
  finished: "Finished",
  rejected: "Rejected",
};

export default function TenderStatusCard({ currentStatus }) {
  return (
    <View style={styles.container}>
      <Typography style={styles.titleText}>Tender Status</Typography>
      <View style={styles.mainContainer}>
        <View
          style={[
            styles.statusBox,
            {
              backgroundColor:
                currentStatus === "rejected" ? "#ef4444" : "#22c55e",
            },
          ]}
        >
          {currentStatus === "rejected" ? (
            <Image
              source={require("@/shared/assets/icons/warning.png")}
              style={styles.tick}
            />
          ) : (
            <Image
              source={require("@/shared/assets/icons/white-tick.png")}
              style={styles.tick}
            />
          )}
        </View>
        <Typography
          style={styles.statusText}
        >{`This tender is ${currentStatus}`}</Typography>
      </View>
    </View>
  );
}
