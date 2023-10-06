import { StyleSheet } from "react-native";
import { semantic, palette } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: semantic.background.white,
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(20),
    height: "100%",
  },
  btn: {
    paddingHorizontal: normalize(10),
    marginRight: normalize(10),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: normalize(20),
    position: 'relative'
  },
  text: {
    textAlign: "center",
    paddingTop: normalize(10),
  },
  imageContainer: {
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(10),
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
