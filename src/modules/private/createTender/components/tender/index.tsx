import React from "react";
import { SafeAreaView, View, Image, Pressable } from "react-native";
import { normalize } from "@/shared/helpers";
import Typography from "@/shared/components/typography";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../../constants";
import { Delete } from "@/shared/assets/icons";
import Icon from "@/shared/components/icon";
import { formatDate } from "../../formatDate";

function SingleItem({ id, name, type, qty, unit, note, removeItemFromTender }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: normalize(10),
        borderTopWidth: 1,
        borderTopColor: "#e9e9e9",
        borderStyle: "dashed",
      }}
    >
      <View style={{ flex: 1 }}>
        <Typography style={{ fontSize: normalize(16), fontWeight: "700" }}>
          {name}
        </Typography>
        <Typography>
          {CATEGORIES[CATEGORIES.findIndex((obj) => obj.key === type)].name}
        </Typography>
        <Typography>{`Quantity: ${qty} ${
          qty == 1 ? unit : `${unit}s`
        }`}</Typography>
        <Typography>{`Note: ${note}`}</Typography>
      </View>
      <Typography
        style={{ fontSize: normalize(20), fontWeight: "700" }}
      >{`${qty}`}</Typography>
      <Pressable
        style={{ paddingLeft: normalize(10) }}
        onPress={() => {
          removeItemFromTender(id);
        }}
      >
        <Icon
          customStyles={{
            tintColor: "red",
            height: normalize(30),
            width: normalize(30),
          }}
          icon={Delete}
        />
      </Pressable>
    </View>
  );
}

export default function Tender({ items, removeItemFromTender }) {
  const RestaurantImage = require("../../../../../../assets/logo.png");
  return (
    <View style={{ padding: normalize(20), height: "100%" }}>
      <Typography
        style={{
          fontSize: normalize(16),
          fontWeight: "800",
        }}
      >
        {formatDate(new Date())}
      </Typography>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: normalize(10),
          paddingVertical: normalize(20),
        }}
      >
        <View
          style={{
            height: normalize(40),
            width: normalize(40),
            borderWidth: 1,
            borderRadius: normalize(20),
            padding: normalize(10),
          }}
        >
          <Image
            resizeMode="cover"
            style={{ height: "100%", width: "100%" }}
            source={RestaurantImage}
          />
        </View>
        <Typography style={{ fontSize: normalize(16), fontWeight: "700" }}>
          Tamwenat dummy restaurant
        </Typography>
      </View>
      <Typography
        style={{
          fontSize: normalize(20),
          fontWeight: "700",
          color: "#71717a",
          paddingBottom: normalize(20),
        }}
      >
        Items Selected
      </Typography>
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: normalize(60) }}
        >
          <TouchableOpacity activeOpacity={1}>
            {items.length === 0 ? (
              <View>
                <Typography>No items selected</Typography>
              </View>
            ) : (
              items.map((item) => (
                <SingleItem
                  key={item.id}
                  removeItemFromTender={removeItemFromTender}
                  {...item}
                />
              ))
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
