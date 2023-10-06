import React from "react";
import { View } from "react-native";
import Typography from "@/shared/components/typography";
import { normalize } from "@/shared/helpers";
import { TouchableOpacity } from "react-native-gesture-handler";

const ActionBtns = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: normalize(12),
        paddingHorizontal: normalize(24),
      }}
    >
      <TouchableOpacity
        style={{
          paddingVertical: normalize(20),
          marginRight: "4%",
          flex: 1,
          minWidth: "48%",
          backgroundColor: "#ef4444",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: normalize(12),
        }}
      >
        <Typography
          style={{
            fontSize: normalize(16),
            fontWeight: "800",
            color: "white",
          }}
        >
          order.cancel_order
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          minWidth: "48%",
          borderColor: "black",
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: normalize(12),
        }}
      >
        <Typography style={{ fontSize: normalize(16), fontWeight: "800" }}>
          order.contact_merchant
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default ActionBtns;
