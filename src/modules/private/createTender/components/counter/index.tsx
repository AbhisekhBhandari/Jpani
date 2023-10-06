import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { Minus, Plus } from "@/shared/assets/icons";

enum TypeChange {
  minus = 0,
  plus = 1,
}

export default function Counter({ count, onChange }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onChange(TypeChange.minus)}
        style={styles.btnReduce}
      >
        <Icon customStyles={styles.minus} icon={Minus} />
      </TouchableOpacity>
      <Typography style={styles.value}>{count}</Typography>
      <TouchableOpacity
        onPress={() => onChange(TypeChange.plus)}
        style={styles.btnAument}
      >
        <Icon customStyles={styles.plus} icon={Plus} />
      </TouchableOpacity>
    </View>
  );
}
