import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Icon from "@/shared/components/icon";
import { Restaurant as RestaurantIcon } from "@/shared/assets/icons";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";
import { Location, Time as TimeIcon } from "@/shared/assets/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import { normalize } from "react-native-elements";
interface RestaurantProps {
  closesInTime: string;
  onPress?: ((event: string) => void) | undefined;
  managerName: string;
  id: string;
  location: string;
}

export default function BranchCard({
  closesInTime,
  onPress,
  managerName,
  id,
  location
}: RestaurantProps) {
  const navigation = useNavigation<NavigationProps>();
  function onPressCard(info: string) {
    if (onPress) {
      onPress(info);
      return;
    }
    navigation.navigate("branchDetail", {
      branch: {
        image: "https://i.ibb.co/K6nkssp/image-201.png",
        id: id
      },
    });
  }

  return (
    <TouchableOpacity onPress={() => onPressCard("infoRestaurant")}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={RestaurantIcon}
        />
        <View style={styles.mainContainerInfo}>
          <View style={styles.containerInfo}>
            <View>
              <Typography>{`Closes in ${closesInTime}`}</Typography>
            </View>
            <View>
              <View style={[styles.row, { paddingVertical: normalize(10) }]}>
                <Icon customStyles={styles.iconInfo} icon={TimeIcon} />
                <Typography style={[styles.info]}>general.manager</Typography>
                <Typography
                  style={[styles.info, styles.managerName]}
                  translate={false}
                  numberOfLines={1} ellipsizeMode="tail"
                >
                  {managerName}
                </Typography>
              </View>
              <View style={[styles.row, { paddingVertical: normalize(1) }]}>
                <Icon customStyles={styles.iconInfo} icon={Location} />
                <Typography style={[styles.info]}>Location</Typography>
                <View style={styles.dot} />
                <Typography style={{flex: 1}} numberOfLines={1} ellipsizeMode="tail">
                  {location}
                </Typography>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
