import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "@/modules/private/conversation/components/header";
import RadioButtons from "@/shared/components/radioButtons";
import { styles } from "./styles";
import Typography from "@/shared/components/typography";
import { semantic } from "@/shared/constants/colors";
import i18n from "@/shared/i18n/config";
import { normalize } from "@/shared/helpers";

export default function ChangeLanguage() {
  const [id, setId] = React.useState("1");
  const options = [
    {
      id: "1",
      active: true,
      CustomLabel: (
        <View style={{ flex: 0.95, flexDirection: "row" }}>
          <View style={styles.info}>
            <View style={styles.containerText}>
              <Typography style={styles.titleOption}>English</Typography>
            </View>
          </View>
        </View>
      ),
    },
    {
      id: "2",
      active: false,
      CustomLabel: (
        <View style={{ flex: 0.95, flexDirection: "row" }}>
          <View style={styles.info}>
            <View style={styles.containerText}>
              <Typography style={styles.titleOption}>العربية</Typography>
            </View>
          </View>
        </View>
      ),
    },
  ];

  useEffect(() => {
    if (id === "1") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ar");
    }
  }, [id]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: semantic.background.white,
        paddingTop: normalize(40),
      }}
    >
      <Header title="Change language" />

      <ScrollView>
        <View>
          <RadioButtons
            onChange={(res) => {
              setId(res.id);
            }}
            options={options}
            columns={1}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
