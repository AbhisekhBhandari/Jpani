import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "@/shared/components/icon";
import { styles } from "./styles";
import { LeftArrow } from "@/shared/assets/icons";
import { useNavigation } from "@react-navigation/native";
import Typography from "@/shared/components/typography";

export default function Header() {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Icon customStyles={styles.btnIcon} icon={LeftArrow} />
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Typography style={styles.title}>
          order.name
        </Typography>
      </View>
    </View>
  );
}
