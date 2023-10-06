import React from "react";
import { View } from "react-native";
import Input from "@/shared/components/input";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { ChevronBottom } from "@/shared/assets/icons";
import Wrapper from "@/shared/components/stepperScreens/components/wrapper";
import { normalize } from "@/shared/helpers";

interface PhoneNumberProps {
  nextStep: (text: string, type: "phone_number" | "verification_code") => void;
  previousStep: () => void;
  progress: number;
  error: string;
  isLoading: boolean;
}

const current_country_code = "+977";

export default function PhoneNumber({
  previousStep,
  nextStep,
  progress,
  error,
  isLoading
}: PhoneNumberProps) {
  const [value, setValue] = React.useState("");
  function renderLeftIcon() {
    return (
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Typography style={{ fontWeight: "600" }}>+971</Typography>
      </View>
    );
  }

  const info = {
    title: "Enter your mobile number",
    description: "Enter your mobile number to proceed to your account",
  };
  return (
    <View style={{ flex: 1 }}>
      <Wrapper
        value={value}
        progress={progress}
        nextStep={() => nextStep(current_country_code + value, "phone_number")}
        previousStep={previousStep}
        info={info}
        isLoading = {isLoading}
      >
        <View style={{ flex: 1 }}>
          <Input
            leftIcon={renderLeftIcon()}
            keyboardType="number-pad"
            value={value}
            onChangeText={(text: string) => setValue(text)}
            placeholder="Enter mobile number"
          />
          {error.length > 0 &&
            <Typography
              style={{
                fontSize: normalize(12),
                marginTop: normalize(10),
                color: "red",
              }}
            >
              {error}
            </Typography>
          }
        </View>
      </Wrapper>
    </View>
  );
}
