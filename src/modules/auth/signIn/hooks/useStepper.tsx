import React, { useContext } from "react";
import { useState } from "react";
import PhoneNumber from "@/modules/auth/signIn/sections/phoneNumber";
import VerificationCode from "@/modules/auth/signIn/sections/verificationCode";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import { AuthContext } from "@/shared/context/auth-context";
import { supabase } from "@/shared/lib/supabase";

export default function useStepper() {
  const context = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const { goBack, navigate } = useNavigation<NavigationProps>();
  const [active, setActive] = useState(0);
  const [phone_number, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const totalContent = 2;
  const progress = (active * 100) / totalContent;
  const content = [
    {
      title: "Personal information",
      component: (
        <PhoneNumber
          progress={progress}
          error={error}
          nextStep={nextStep}
          previousStep={previousStep}
          isLoading={isLoading}
        />
      ),
    },
    {
      title: "Enter code verification",
      component: (
        <VerificationCode
          progress={progress}
          error={error}
          nextStep={nextStep}
          previousStep={previousStep}
          isLoading={isLoading}
        />
      ),
    },
  ];

  async function nextStep(
    text: string,
    type: "phone_number" | "verification_code"
  ) {
    if (type === "phone_number" && text.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }

    if (type === "verification_code" && text.length < 4) {
      setError("Please enter a valid verification code");
      return;
    }

    setError("");

    console.log(text, type);

    if (type === "phone_number") {
      setPhoneNumber(text);
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ phone: text });
      setIsLoading(false)
      if (error) {
        setError(error.message);
        return;
      }
    }

    if (type === "verification_code") {
      setIsLoading(true)
      const { error } = await supabase.auth.verifyOtp({
        token: text,
        phone: phone_number,
        type: "sms",
      });
      setIsLoading(false)
      if (error) {
        setError(error.message);
        return;
      }
    }

    if (active === totalContent - 1) {
      context.changeAuthenticationStatus("tab", active);
      return;
    }
    setActive((prevState) => prevState + 1);
  }


  function previousStep() {
    if (active === 0) {
      goBack();
      return;
    }
    setActive((prevState) => prevState - 1);
  }
  return {
    content,
    active,
  };
}
