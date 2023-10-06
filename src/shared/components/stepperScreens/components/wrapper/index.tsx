import React from "react";
import { KeyboardAvoidingView, View, ActivityIndicator } from "react-native";
import { normalize } from "@/shared/helpers";
import { Button } from "@/shared/components/buttons";
import Typography from "@/shared/components/typography";
import { semantic } from "@/shared/constants/colors";
import Navbar from "@/shared/components/stepperScreens/components/header";
import ScreenInfo from "@/shared/components/stepperScreens/components/screenInfo";
import { osName } from "expo-device";

interface WrapperProps {
  children?: React.ReactNode;
  footerInfo?: React.ReactNode;
  info: { title: string; description: string };
  nextStep: () => void;
  previousStep: () => void;
  progress: number;
  value: string;
  isLoading?: boolean
}

function FooterInfo() {
  return (
    <Typography style={{ color: semantic.text.light }}>
      auth.footer_info
    </Typography>
  );
}
export default function Wrapper({
  children,
  footerInfo = FooterInfo(),
  info,
  previousStep,
  nextStep,
  progress,
  value,
  isLoading
}: WrapperProps) {
  return (
    <KeyboardAvoidingView
      behavior={osName.toLowerCase() === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={normalize(60)}
      style={{
        flex: 1,
        paddingHorizontal: normalize(24),
      }}
    >
      <View>
        <Navbar progress={progress} onPress={previousStep} />
        <ScreenInfo title={info.title} description={info.description} />
      </View>
      <View style={{ flex: 1 }}>{children}</View>
      <View>
        <View style={{ marginBottom: normalize(18) }}>
          {footerInfo && footerInfo}
        </View>
        {value.length === 0 ? (
          <Button onPress={nextStep} disabled title="general.continue" />
        ) : isLoading ?
          <View style={{
            backgroundColor: semantic.background.dark,
            paddingHorizontal: normalize(18),
            paddingVertical: normalize(14),
            borderRadius: normalize(8),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ActivityIndicator size="small" color={"#000000"} />
          </View>
          :
          (
            <Button onPress={nextStep} title="general.continue" />
          )}
      </View>
    </KeyboardAvoidingView>
  );
}
