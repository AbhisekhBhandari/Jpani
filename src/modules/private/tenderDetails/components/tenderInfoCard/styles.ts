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
    fontSize: normalize(18),
    fontWeight: "800"
  },
  expirydate: {
    marginTop: normalize(10),
    color: "#333",
    fontSize: normalize(16),
    fontWeight: "800",
  },
  mainContainer: {
    paddingTop: normalize(10)
  },
  restroDetailsWrapper: {
    marginTop: normalize(15),
    flexDirection: "row",
    alignItems: "center",
  },
});
