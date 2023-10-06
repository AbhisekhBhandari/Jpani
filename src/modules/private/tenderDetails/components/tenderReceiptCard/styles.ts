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
    color: "#6b7280",
    fontWeight: "600",
    fontSize: normalize(18),
  },
  mainContainer: {
    marginVertical: normalize(20),
  },
  singleItemContainer: {
    borderBottomColor: "#d1d5db",
    borderBottomWidth: 1,
    borderStyle: "dotted",
    marginVertical: normalize(10),
  },
  itemTitle: { fontSize: normalize(16), fontWeight: "800" },
  qtyDetailsText: {
    fontSize: normalize(16),
    fontWeight: "500",
    paddingVertical: normalize(10),
  },
  priceText: { fontSize: normalize(16) },
});
