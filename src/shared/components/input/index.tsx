import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from '@/shared/components/icon';
import {Email} from '@/shared/assets/icons';
import {_styles} from './styles';
import Typography from '@/shared/components/typography';
import {semantic} from '@/shared/constants/colors';
import {KeyboardTypeOptions} from 'react-native/Libraries/Components/TextInput/TextInput';
import { useTranslation } from "react-i18next";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native/Libraries/Types/CoreEventTypes";

interface InputProps {
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  multiline?: boolean | undefined;
  maxLength?: number | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  editable?: boolean | undefined;
  placeholder?: string | undefined;
  secureTextEntry?: boolean | undefined;
  leftIcon?: React.ReactNode | undefined;
  rightIcon?: React.ReactNode | undefined;
  label?: string | undefined;
  onPressIn?: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined;
  error?: string
}

export default function Input({
  value,
  onChangeText,
  multiline,
  maxLength,
  keyboardType,
  editable,
  placeholder,
  secureTextEntry,
  leftIcon,
  rightIcon,
  label,
  onPressIn,
  error
}: InputProps) {
  const [isFocus, setFocus] = useState(false);
  console.log('errorr hereee',error);
  const styles = _styles(isFocus,error);
  const {t} = useTranslation()
  
  
  return (
    <View>
      {label && <Typography>{label}</Typography>}
      <View style={styles.container}>
        {leftIcon && leftIcon}
        <TextInput
          onPressIn={onPressIn}
          multiline={multiline}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}
          keyboardType={keyboardType}
          editable={editable}
          // @ts-ignore
          placeholder={t(placeholder)}
          secureTextEntry={secureTextEntry}
          onFocus={() => setFocus(true)}
          placeholderTextColor={semantic.border.default}
          style={styles.input}
        />
        {rightIcon && rightIcon}
      </View>
      <View>
        <Typography style={styles.errorText}>{ error }</Typography>
      </View>
    </View>
  );
}
