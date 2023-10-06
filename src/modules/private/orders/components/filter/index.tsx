import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";

const filters = {
  all: "All",
  new: "New",
  in_delivery: "In Delivery",
  completed: "Delivered",
};

export default function Filter({ filter, setFilter }) {
  return (
    <View style={styles.container}>
      {["all", "new", "in_delivery", "completed"].map((val) => (
        <TouchableOpacity key={val} onPress={() => setFilter(val)}>
          <View
            style={
              val === filter ? [styles.btn, styles.activeBtn] : [styles.btn]
            }
          >
            <Text style={val === filter && styles.activeText}>
              {filters[val]}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
