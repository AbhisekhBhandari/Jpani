import { StyleSheet } from "react-native";
import { semantic} from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: semantic.background.white,
    paddingHorizontal: normalize(24),
    borderBottomWidth: 1,
    paddingVertical: normalize(40),
    borderColor: '#E9E9E9'
  },
  btn: {
    paddingHorizontal: normalize(10),
    marginRight: normalize(2),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    paddingTop: normalize(10),
    fontSize: normalize(12)
  },
  activeText: {
    color: "black",
    fontWeight: '500'
  },
  imageContainer: {
    height: normalize(60),
    width: normalize(60),
    borderRadius: normalize(40),
    overflow:'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
    padding: 0
  },
  image: {
    height: "100%",
    width: "100%",
  },
  activeImageContainer: {
    borderColor: 'black',
  },
});
