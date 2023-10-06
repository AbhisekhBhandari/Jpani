import Typography from "@/shared/components/typography";
import { View } from "react-native";
import Icon from "@/shared/components/icon";
import { Frame, Star, Time } from "@/shared/assets/icons";
import React from "react";
import { styles, _styles } from "./styles";
import { Location, Time as TimeIcon } from "@/shared/assets/icons";
import { normalize } from "@/shared/helpers";

interface IProps {
  location: string;
  branchManager: string;
}

export default function InfoRestaurant({ location, branchManager }: IProps) {
  return (
    <View style={styles.containerInfo}>
      <Typography style={styles.title} translate={false}>
        Sizzling Steaks, {location}
      </Typography>
      <Typography style={styles.category}>Steak, Grill</Typography>

      {branchManager && (
        <View>
          <View style={[styles.row, { paddingVertical: normalize(10) }]}>
            <Icon customStyles={_styles.iconInfo} icon={TimeIcon} />
            <Typography style={[_styles.info]}>general.manager</Typography>
            <Typography
              style={[_styles.info, _styles.managerName]}
              translate={false}
            >
              : {branchManager}
            </Typography>
          </View>
        </View>
      )}
      {location && (
        <View style={[styles.row, { paddingVertical: normalize(1) }]}>
          <Icon customStyles={_styles.iconInfo} icon={Location} />
          <Typography style={[_styles.info]}>Location</Typography>
          <View style={styles.dot} />
          <Typography>{location}</Typography>
        </View>
      )}
    </View>
  );
}
