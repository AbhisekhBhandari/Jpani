import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { Minus, Plus } from "@/shared/assets/icons";

enum TypeChange {
  minus = 0,
  plus = 1,
}

export default function Counter() {
  const [count, setCounter] = useState(1);
  function onChange(type: number) {
    if (type === TypeChange.minus) {
      if (count > 1) {
        setCounter((prevState) => prevState - 1);
      }
      return;
    }
    setCounter((prevState) => prevState + 1);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onChange(TypeChange.minus)}
        style={styles.btnReduce}
      >
        <Icon customStyles={styles.minus} icon={Minus} />
      </TouchableOpacity>
      <Typography style={styles.value}>
        {count}
      </Typography>
      <TouchableOpacity
        onPress={() => onChange(TypeChange.plus)}
        style={styles.btnAument}
      >
        <Icon customStyles={styles.plus} icon={Plus} />
      </TouchableOpacity>
    </View>
  );
}
