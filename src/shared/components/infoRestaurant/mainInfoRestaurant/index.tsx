import { _styles } from "@/shared/components/cards/restaurant/styles";
import { View } from "react-native";
import InfoRestaurant, { Price } from "@/shared/components/infoRestaurant";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { Location, Time as TimeIcon } from "@/shared/assets/icons";
import React from "react";
import { normalize } from "@/shared/helpers";

export default function MainInfoRestaurant({
  checkLocation,
  reviews,
  timeRestaurant,
  distance,
  branchManager,
  name,
  location
}: any) {
  const styles = _styles(checkLocation);
  return (
    <View style={styles.containerInfo}>
      <View>
        {name && <Typography style={styles.nameRestaurant}>{name}</Typography>}
        <InfoRestaurant
          time={timeRestaurant}
          distance={distance}
          reviews={reviews}
        />
      </View>
      {branchManager && (
        <View>
          <View style={[styles.row, { paddingVertical: normalize(10) }]}>
            <Icon customStyles={styles.iconInfo} icon={TimeIcon} />
            <Typography style={[styles.info]}>general.manager</Typography>
            <Typography
              style={[styles.info, styles.managerName]}
              translate={false}
            >
              : {branchManager}
            </Typography>
          </View>
        </View>
      )}
      {location && (
        <View style={[styles.row, { paddingVertical: normalize(1) }]}>
          <Icon customStyles={styles.iconInfo} icon={Location} />
          <Typography style={[styles.info]}>Location</Typography>
          <View style={styles.dot} />
          <Typography>
            {location}
          </Typography>
        </View>
      )}
    </View>
  );
}
