import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const _styles = (isFocus: boolean, error?:string) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: normalize(8),
      borderWidth: 1,
      borderColor: isFocus ? semantic.border.active : error && error.length > 0  ? semantic.border.error :  semantic.border.default,
      paddingHorizontal: normalize(12),
      paddingVertical: normalize(6),
      marginTop: normalize(8),
      backgroundColor: "#F4F4F4",
    },
    input: {
      flex: 1,
      padding: normalize(8),
      color: semantic.text.default,
    },

    errorText: {
      fontSize: normalize(12),
      color: semantic.text.error,
      marginTop: normalize(4),
    },
  });
