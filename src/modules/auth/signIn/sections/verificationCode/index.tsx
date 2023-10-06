import { Pressable, View } from "react-native";
import Input from "@/shared/components/input";
import React, { useEffect } from "react";
import Typography from "@/shared/components/typography";
import { semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";
import Wrapper from "@/shared/components/stepperScreens/components/wrapper";

interface VerificationCodeProps {
  nextStep: (text: string, type: "phone_number" | "verification_code") => void;
  previousStep: () => void;
  progress: number;
  error: string;
  isLoading: boolean
}
export default function VerificationCode({
  previousStep,
  nextStep,
  progress,
  error,
  isLoading
}: VerificationCodeProps) {
  const [value, setValue] = React.useState("");
  const [count, setCount] = React.useState(20)

  useEffect(() => {
    const t = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(t)
          return prev
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(t)
    }
  }, [])

  const info = {
    title: "Enter your verification code",
    description: "Enter your verification code to proceed to your account",
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper
        progress={progress}
        value={value}
        nextStep={() => nextStep(value, "verification_code")}
        previousStep={previousStep}
        info={info}
        isLoading={isLoading}
      >
        <View style={{ flex: 1 }}>
          <Input
            placeholder="Code"
            value={value}
            keyboardType="number-pad"
            onChangeText={(text: string) => setValue(text)}
            rightIcon={
              <Typography style={{ color: semantic.text.light }}>
                {count.toString()}
              </Typography>
            }
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Typography
              style={{
                fontSize: normalize(12),
                marginTop: normalize(10),
                color: semantic.text.light,
              }}
            >
              Not receiving verification code?
            </Typography>
            <Pressable onPress={previousStep}>
              <Typography style={count === 0 ? {
                fontSize: normalize(16),
                marginTop: normalize(10),
                fontWeight: "700",
                color: semantic.text.default,
              } : {
                fontSize: normalize(12),
                marginTop: normalize(10),
                color: semantic.text.light,
              }} >
                Resend code
              </Typography>
            </Pressable>
          </View>


          {error.length > 0 && (
            <Typography
              style={{
                fontSize: normalize(12),
                marginTop: normalize(10),
                color: "red",
              }}
            >
              {error}
            </Typography>
          )}
        </View>
      </Wrapper>
    </View>
  );
}
