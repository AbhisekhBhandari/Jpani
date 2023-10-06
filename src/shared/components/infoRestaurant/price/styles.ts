import { StyleSheet } from "react-native";
import { palette, semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  info: {
    color: semantic.text.light,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: normalize(10)
  },
  dot: {
    width: normalize(10),
    height: normalize(10),
    borderRadius: 150,
    backgroundColor: semantic.background.dark,
    marginHorizontal: normalize(8),
  },
  iconPrice: {
    marginRight: normalize(6),
  },
  price: {
    fontWeight: "700",
    fontSize: normalize(13),
  },
  dotPrice: {
    width: normalize(5),
    height: normalize(5),
    borderRadius: 150,
    marginHorizontal: normalize(8),
  },
});
