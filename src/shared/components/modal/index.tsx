import Typography from "@/shared/components/typography";
import { semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";
import React, { useRef } from "react";
import { View, Pressable } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default function Modal({
  children,
  button,
  height = 300,
  showBottomBtn = false,
  bottomClickHandler = () => {},
  bottomText = "Confirm",
}) {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() =>
          // @ts-ignore
          refRBSheet.current && refRBSheet.current.open()
        }
      >
        {button}
      </Pressable>

      {/* @ts-ignore  */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnSwipeDown = {false}
        dragFromTopOnly={true}
        closeOnPressMask={true}
        height={height}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        {children}
        {showBottomBtn && (
          <Pressable
            style={{
              borderRadius: normalize(10),
              overflow: "hidden",
              position: "absolute",
              bottom: 20,
              width: "92%",
              marginHorizontal: "4%",
            }}
            onPress={() => {
              // @ts-ignore
              refRBSheet.current && refRBSheet.current.close();
              bottomClickHandler();
            }}
          >
            <Typography
              style={{
                fontSize: normalize(16),
                fontWeight: "800",
                color: "white",
                backgroundColor: "black",
                width: "100%",
                textAlign: "center",
                paddingVertical: normalize(20),
              }}
            >
              {bottomText}
            </Typography>
          </Pressable>
        )}
      </RBSheet>
    </View>
  );
}
