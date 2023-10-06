import React from 'react';
import DatePicker from 'react-native-date-picker';
import {View} from 'react-native';
import ButtonSheet from '@/shared/components/buttonSheet';
import {useState} from 'react';
import {styles} from './styles';
import TitleSection from '@/shared/components/titleSection';

export default function CustomDatePicker({title, open, onClose}: any) {
  const [date, setDate] = useState(new Date());
  return (
    <ButtonSheet onClose={onClose} dispatch={open}>
      <View>
        <View style={styles.containerTitle}>
          <TitleSection>{title}</TitleSection>
        </View>

        <View style={styles.containerPicker}>
          <DatePicker textColor="#000000" date={date} onDateChange={setDate} />
        </View>
      </View>
    </ButtonSheet>
  );
}
