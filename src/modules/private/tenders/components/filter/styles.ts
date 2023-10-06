import { StyleSheet } from "react-native";
import { semantic, palette } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: semantic.background.white,
    height: normalize(82),
    paddingHorizontal: normalize(24),
  },
  btn: {
    borderWidth: 1,
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(14),
    borderRadius: normalize(12),
    marginRight: normalize(10)
  },
  activeBtn: {
    backgroundColor: "#ef4444",
    borderColor: "#ef4444",
    borderRadius: normalize(12),
    fontWeight: "700",
    // borderWidth: 12,
  },

  activeText: {
    color: palette.neutral.white,
  }
});
