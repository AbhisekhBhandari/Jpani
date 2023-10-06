import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Typography from '@/shared/components/typography';
import ButtonSheet from '@/shared/components/buttonSheet';
import {styles} from '@/shared/components/dropDown/styles';
import {ChevronBottom} from '@/shared/assets/icons';
import Icon from '@/shared/components/icon';

interface Option {
  id: string;
  label: string;
  value: string;
}
interface DropDownProps {
  options: Option[];
  onChange: (option: Option) => void;
}

export default function DropDown({options, onChange}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: Option) => {
    onChange(option);
    toggleDropDown();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleDropDown}
        activeOpacity={0.8}
        style={styles.dropDown}>
        <Typography style={styles.textDropDown}>Delivery</Typography>
        <Icon icon={ChevronBottom} />
      </TouchableOpacity>

      <ButtonSheet onClose={toggleDropDown} dispatch={isOpen}>
        <View style={styles.containerModal}>
          {options.map(option => (
            <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionSelect(option)}
              style={{padding: 10}}>
              <Typography>{option.label}</Typography>
            </TouchableOpacity>
          ))}
        </View>
      </ButtonSheet>
    </View>
  );
}
