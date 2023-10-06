import { StyleSheet } from "react-native";
import { semantic, palette } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    alignSelf: "flex-start",
    marginTop: "2%",
    marginBottom: "2%",
    elevation: 4,
  },
  logo: {
    width: normalize(53),
    height: normalize(53),
    resizeMode: "contain",
  },
  title: {
    color: "#6b7280",
  },
  orderDetailsBtn: {
    fontWeight: "800",
    color: "#ef4444",
  },
  totalPrice: {
    fontSize: normalize(16),
    fontWeight: "800",
  },
  time: {
    fontSize: normalize(16),
    fontWeight: "800",
  },
  timeWrapper: {
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restroDetailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(20),
  },
  orderDetailsBtnWrapper: {
    borderTopWidth:  normalize(0.25),
    borderColor: "#d4d4d4",
    paddingVertical: normalize(10),
    paddingHorizontal:  normalize(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusText: {
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(5),
    backgroundColor: semantic.background.dark,
    color: "white",
  },
});
