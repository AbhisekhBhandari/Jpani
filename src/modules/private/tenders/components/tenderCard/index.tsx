import React from "react";
import { Image, View, Text } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Typography from "@/shared/components/typography";
import { normalize } from "@/shared/helpers";
import { formatDate } from "@/shared/utils";

interface IProps {
  logo: any;
  title: string;
  expirydate: string;
  status: string;
  total: number;
  supplied: number;
  navigation: any;
  currency_prefix: string;
  id: string;
}

export default function TenderCard(props: IProps) {
  const { id, logo, title, expirydate, status, total, supplied, navigation, currency_prefix } =
    props;

  return (
    <View style={styles.card}>
      <View style={styles.timeWrapper}>
        <Text style={styles.time}>Expires on {formatDate(expirydate)}</Text>
      </View>
      <View style={styles.restroDetailsWrapper}>
        <Image alt={title} style={styles.logo} source={logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={{
          paddingHorizontal: normalize(20),
          borderColor: "#d1d5db",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: normalize(10),
          }}
        >
          <Typography style={styles.boldText}>tender.totalAgreement</Typography>
          <Typography style={styles.boldText}>
            {`$ ${total.toFixed(2).toString()}`}
          </Typography>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: normalize(10),
          }}
        >
          <Typography style={styles.boldText}>tender.supplied</Typography>
          <Typography style={styles.boldText}>
            {`$ ${supplied.toFixed(2).toString()}`}
          </Typography>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: normalize(10),
          }}
        >
          <Typography style={styles.boldText}>tender.net</Typography>
          <Typography style={styles.boldText}>
            {`$ ${(total - supplied).toFixed(2).toString()}`}
          </Typography>
        </View>
      </View>
      <View style={styles.tenderDetailsBtnWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("tenderDetails", {
              id,
            });
          }}
        >
          <Typography style={styles.tenderDetailsBtn}>
            tender.details
          </Typography>
        </TouchableOpacity>
        <View style={styles.statusText}>
          <Text style={{ color: "white", textTransform: "capitalize" }}>
            {status}
          </Text>
        </View>
      </View>
    </View>
  );
}
