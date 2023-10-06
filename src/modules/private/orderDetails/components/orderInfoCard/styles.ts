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
  logo: {
    width: normalize(53),
    height: normalize(53),
    resizeMode: "contain",
  },
  title: {
    color: "#6b7280",
    fontSize: normalize(16),
    fontWeight: "800"
  },
  time: {
    fontSize: normalize(14),
    fontWeight: "600",
  },
  mainContainer: {
    paddingTop: normalize(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  restroDetailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
