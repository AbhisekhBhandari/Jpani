import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const styles = StyleSheet.create({
  body: {
    backgroundColor: semantic.background.white,
    flex: 1,
  },
  mainContainer: {
    backgroundColor: "#fafafa",
    rowGap: normalize(10)
  },
});
