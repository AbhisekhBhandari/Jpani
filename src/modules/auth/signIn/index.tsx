import React from 'react';
import { SafeAreaView} from 'react-native';
import StepperScreens from '@/shared/components/stepperScreens';
import useStepper from '@/modules/auth/signIn/hooks/useStepper';
import {normalize} from '@/shared/helpers';
import { osName } from 'expo-device';

export default function SignIn() {
  const {active, content} = useStepper();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: osName.toLowerCase() === 'ios' ? 0 : normalize(14),
        paddingTop: osName.toLowerCase() === 'ios' ? 0 : normalize(50)
      }}>
      <StepperScreens active={active} content={content} />
    </SafeAreaView>
  );
}
