import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { palette, semantic } from "@/shared/constants/colors";

const colorInfo = semantic.text.light;
const dot = {
  width: normalize(5),
  height: normalize(5),
  borderRadius: 150,
  backgroundColor: semantic.background.dark,
  marginHorizontal: normalize(8),
};
export const styles = StyleSheet.create({
  container: {
    width: normalize(250),
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: normalize(82),
    height: normalize(82),
  },
  mainContainerInfo: {
    flexGrow: 1,
    marginLeft: normalize(20),
  },
  containerInfo: {
    width: "100%",
    justifyContent: "space-between",
  },
  dot: {
    ...dot,
  },
  nameRestaurant: {
    fontWeight: "700",
    fontSize: normalize(18),
    marginBottom: normalize(6),
  },
  managerName: {
    marginLeft: normalize(4),
    fontWeight: "500",
    flex: 1,
  },
  info: {
    color: colorInfo,
    fontWeight: "700",
  },
  iconInfo: {
    tintColor: colorInfo,
  },
  iconSize: {
    width: normalize(22),
    height: normalize(22),
  },
});
