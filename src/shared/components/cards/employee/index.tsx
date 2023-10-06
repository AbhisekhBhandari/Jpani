import React from "react";
import { Image, View } from "react-native";
import Typography from "@/shared/components/typography";
import { styles, stylesVertical } from "./styles";
import ButtonPill from "@/shared/components/buttons/buttonPill";
import Icon from "@/shared/components/icon";
// import { Plus } from "@/shared/assets/icons";
import { Employee as User } from "@/shared/assets/icons";
import Counter from "@/shared/components/counter";

interface EmployeeProps {
  id: string;
  name: string;
  role: string;
  description: string;
}

export default function Employee({
  id,
  name,
  role,
  description,
}: EmployeeProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageProduct} source={User} />
      <View style={styles.info}>
        <View style={styles.footer}>
          <Typography style={styles.id}>ID: {id}</Typography>
          <ButtonPill outline title={role} />
        </View>
        <View>
          <Typography style={styles.title}>{name}</Typography>
          <Typography
            style={styles.description}
            numberOfLines={2}
            translate={false}
          >
            {description}
          </Typography>
        </View>
      </View>
    </View>
  );
}
