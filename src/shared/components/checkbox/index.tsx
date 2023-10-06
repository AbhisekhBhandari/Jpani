import checkIcon from './check.png';
import {Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export default function CheckBox() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  function onToggleTerms() {
    setAcceptedTerms(!acceptedTerms);
  }

  return (
    <TouchableOpacity
      onPress={onToggleTerms}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{
          tintColor: acceptedTerms ? semantic.background.dark : 'white',
          borderWidth: acceptedTerms ? 0 : 1,
          borderColor: 'gray',
          borderRadius: normalize(6),
          width: normalize(20),
          height: normalize(20),
        }}
        source={checkIcon}
      />
    </TouchableOpacity>
  );
}
