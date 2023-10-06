import React from "react";
import {View, Image } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";

const STAGES = ["new", "processed", "in-delivery", "delivered"];

function Stage({ title, passed, index }) {
  return (
    <View style={styles.singleStatus}>
      <View
        style={[
          styles.statusBox,
          {
            backgroundColor: passed ? "#22c55e" : "#d1d5db",
          },
        ]}
      >
        {passed && (
          <Image
            source={require("@/shared/assets/icons/white-tick.png")}
            style={styles.tick}
          />
        )}
      </View>
      <Typography style={styles.statusText}>{title}</Typography>
    </View>
  );
}

export default function OrderStatusCard({ currentStatus }) {
  const currentStatusIndex = STAGES.indexOf(currentStatus);
  return (
    <View style={styles.container}>
      <Typography style={styles.titleText}>order.status</Typography>
      <View style={styles.mainContainer}>
        <View
          style={{
            position: "absolute",
            width: `${(currentStatusIndex * 80) / 3}%`,
            left: "10%",
            transform: [{ translateY: 14 }],
            borderTopWidth: normalize(3),
            borderColor: "#22c55e",
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            width: `${((3 - currentStatusIndex) * 80) / 3}%`,
            right: "10%",
            transform: [{ translateY: 14 }],
            borderTopWidth: normalize(3),
            borderStyle: "dashed",
            borderColor: "#d1d5db",
          }}
        ></View>
        {STAGES.map((stage, index) => (
          <Stage
            key={stage}
            title={stage}
            index={index}
            passed={STAGES.indexOf(stage) <= currentStatusIndex}
          />
        ))}
      </View>
    </View>
  );
}
