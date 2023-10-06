import { StyleSheet } from "react-native";
import { semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: semantic.background.white,
    padding: normalize(24),
    marginBottom: normalize(10),
  },
  titleText: {
    fontWeight: "800",
    fontSize: normalize(18),
  },
  mainContainer: {
    flexDirection: "row",
    position: "relative",
    marginTop: normalize(30),
    alignItems:'center',
  },
  statusBox: {
    height: normalize(30),
    width: normalize(30),
    borderRadius: 40,
    alignItems: "center",
    marginRight: normalize(16),
    justifyContent: "center",
  },
  statusText: {
    fontSize: normalize(16),
  },
  tick: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: "contain",
  },
});
