import React from 'react';
import { TouchableOpacity, View } from "react-native";
import {styles} from './styles';
import Typography from '@/shared/components/typography';
import Icon from "@/shared/components/icon";
import { ChevronRight, RightArrow } from "@/shared/assets/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import Avatar from "@/modules/private/profile/components/avatar";

export default function User() {
  const navigation = useNavigation<NavigationProps>();
  function goToEdit() {
    navigation.navigate('editProfile');
  }
  return (
    <TouchableOpacity onPress={goToEdit} style={styles.container}>
      <View style={styles.innerContainer}>
        <Avatar />
        <View>
          <Typography style={styles.name} translate={false}>
            Tamwenat
          </Typography>
          <Typography style={styles.email} translate={false}>
            contact@tamwenat.com
          </Typography>
        </View>
      </View>
      <TouchableOpacity>
        <Icon customStyles={styles.icon} icon={ChevronRight} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
