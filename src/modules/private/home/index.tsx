import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "./components/header";
import { semantic } from "@/shared/constants/colors";
import LatestOrders from "@/modules/private/home/components/latestOrders";
import Branches from "@/modules/private/home/components/branches";
import ChatWithUs from "@/modules/private/home/components/chatwithus";
import { normalize } from "@/shared/helpers";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: semantic.background.white,
        flex: 1,
        paddingTop: normalize(50),
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 10, marginBottom: normalize(4) }}
      >
        <Header />
        <LatestOrders title={"general.latestorders"} />
        <Branches />
      </ScrollView>
      <ChatWithUs />
    </SafeAreaView>
  );
}
