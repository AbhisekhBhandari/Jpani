import {View} from 'react-native';
import React from 'react';
import Typography from '@/shared/components/typography';
import CheckBox from '@/shared/components/checkbox';
import Wrapper from '@/shared/components/stepperScreens/components/wrapper';

interface TermsAndConditionsProps {
  nextStep: () => void;
  previousStep: () => void;
  progress: number;
}
export default function TermsAndConditions({
  previousStep,
  nextStep,
  progress,
}: TermsAndConditionsProps) {
  const info = {
    title: 'Accept Foodlam Terms and Condition & Privacy Policies',
    description:
      'By selecting "I Agree", I have read in full and agree to Tamwenat\'s Terms and Conditions & Privacy Policy.',
  };
  function footerInfo() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Typography style={{fontWeight: '700'}}>I Agree</Typography>
        <CheckBox />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <Wrapper
        progress={progress}
        nextStep={nextStep}
        previousStep={previousStep}
        footerInfo={footerInfo()}
        info={info}
      />
    </View>
  );
}
