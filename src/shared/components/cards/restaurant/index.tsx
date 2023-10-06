import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Icon from "@/shared/components/icon";
import { ChevronRight, Restaurant as RestaurantIcon } from "@/shared/assets/icons";
import Typography from "@/shared/components/typography";
import { _styles } from "./styles";
import MainInfoRestaurant from "@/shared/components/infoRestaurant/mainInfoRestaurant";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
interface RestaurantProps {
  discount?: any | undefined;
  reviews?: any | undefined;
  checkLocation?: any | undefined;
  time?: any | undefined;
  onPress?: ((event: string) => void) | undefined;
  distance?: boolean | undefined;
  timeRestaurant?: boolean | undefined;
  managerName: string;
  id: string;
  location: string;
}

export default function Restaurant({
  discount,
  reviews,
  checkLocation,
  time,
  onPress,
  distance,
  timeRestaurant,
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

  //branchchanges
  const styles = _styles(checkLocation);
  return (
    <TouchableOpacity onPress={() => onPressCard("infoRestaurant")}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={RestaurantIcon}
        />
        <View style={styles.mainContainerInfo}>
          <MainInfoRestaurant
            timeRestaurant={timeRestaurant}
            distance={distance}
            checkLocation={checkLocation}
            time={time}
            discount={discount}
            reviews={reviews}
            location={location}
            branchManager={managerName}
          />
        </View>
      </View>
      {checkLocation && (
        <View style={[styles.row, styles.checkLocation]}>
          <Typography>general.check_location</Typography>
          <Icon icon={ChevronRight} />
        </View>
      )}
    </TouchableOpacity>
  );
}
