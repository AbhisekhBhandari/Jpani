import React from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";

const filters = {
  pending: "Pending",
  effective: "Approved",
  all: "All",
  rejected: "Rejected",
};

export default function Filter({ filter, setFilter }) {
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {["all", "pending", "effective", "rejected"].map((val) => (
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
    </ScrollView>
  );
}
