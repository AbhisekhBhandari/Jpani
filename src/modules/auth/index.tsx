import LogoApp from "./logo.png";
import { Image, SafeAreaView, View } from "react-native";
import { normalize } from "@/shared/helpers";
import React from "react";
import { osName, modelName } from "expo-device";
import { Button } from "@/shared/components/buttons";
import { NavigationProps } from "@/shared/routes/stack";
console.log(modelName);
interface AuthProps {
  navigation: NavigationProps;
}
export default function Auth({ navigation }: AuthProps) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: osName.toLowerCase() === "ios" ? 0 : normalize(14),
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          paddingHorizontal: normalize(24),
          flex: 1,
          paddingTop: normalize(100),
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            style={{
              width: normalize(80),
              height: normalize(80),
              borderRadius: normalize(8),
            }}
            resizeMode="cover"
            source={LogoApp}
          />
        </View>

        <View
          style={{
            marginBottom: normalize(10),
            justifyContent: "flex-end",
          }}
        >
          <Button
            onPress={() => navigation.navigate("signIn")}
            title="auth.login"
          />
          <View style={{ marginVertical: normalize(8) }} />
        </View>
      </View>
    </SafeAreaView>
  );
}
