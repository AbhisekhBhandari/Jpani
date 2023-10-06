import React from "react";
import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import Icon from "@/shared/components/icon";
import { ChevronBottom, LeftArrow } from "@/shared/assets/icons";
import Typography from "@/shared/components/typography";
import Input from "@/shared/components/input";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import ButtonPill from "@/shared/components/buttons/buttonPill";
import { Maps } from "@/shared/assets/images";

export default function AddAddress() {
  const { goBack } = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Icon icon={LeftArrow} />
          </TouchableOpacity>
          <Typography style={styles.title}>New address</Typography>
          <ButtonPill title="Save" />
        </View>
        <View style={styles.maps}>
          <Image resizeMode="stretch" style={styles.maps} source={Maps} />
        </View>

        <View style={styles.body}>
          <View style={styles.my}>
            <Input label="Address nickname" placeholder="My home" />
          </View>
          <View style={styles.my}>
            <Input label="Building type" placeholder="House building" />
          </View>
          <View style={styles.my}>
            <Input label="Building number" placeholder="55" />
          </View>
          <View style={styles.my}>
            <Input
              label="Additional direction"
              placeholder="The location of the house next to the minimarket"
            />
          </View>
          <View style={styles.my}>
            <Input
              leftIcon={
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                  <Typography style={{ fontWeight: "600" }}>+971</Typography>
                  <Icon icon={ChevronBottom} />
                </View>
              }
              label="Phone number"
              placeholder="85465874512"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
