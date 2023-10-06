import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { styles } from "./styles";
import Icon from "@/shared/components/icon";
import { Dollar as DollarIcon } from "@/shared/assets/icons";
import Typography from "@/shared/components/typography";
import React from "react";

export default function Price({ price }: { price: string }) {
  const { t } = useTranslation();
  return (
    <View style={styles.row}>
      <Icon customStyles={styles.iconPrice} icon={DollarIcon} />
      <Typography style={styles.price} translate={false}>
        Price
      </Typography>
      <View style={styles.dot} />
      <Typography numberOfLines={1} style={[styles.price]} translate={false}>
        {price} AED
      </Typography>
    </View>
  );
}
