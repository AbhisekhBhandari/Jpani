import { StyleSheet } from "react-native";
import { semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: semantic.background.white,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    height: normalize(64),
    borderBottomColor: "#E9E9E9",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingHorizontal: normalize(24),
  },
  title: {
    textAlign: "center",
    flex: 0.9,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    padding: normalize(24),
  },
  spancer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: normalize(10),
  },
});
