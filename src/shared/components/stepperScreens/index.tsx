import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';

const StepperScreens = (props: any) => {
  const {active, content, wrapperStyle, scrollView = true} = props;
  const [step, setStep] = useState([0]);
  const pushData = (val: any) => {
    setStep(prev => [...prev, val]);
  };

  const removeData = () => {
    setStep(prev => {
      prev.pop();
      return prev;
    });
  };

  useEffect(() => {
    if (step[step.length - 1] > active) {
      removeData();
    } else {
      pushData(active);
    }
  }, [active]);

  return (
    <View style={[wrapperStyle, {flex: 1}]}>
      {scrollView ? (
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>{content[active].component}</View>
        </ScrollView>
      ) : (
        <View style={{flex: 1}}>{content[active].component}</View>
      )}
    </View>
  );
};

export default StepperScreens;
