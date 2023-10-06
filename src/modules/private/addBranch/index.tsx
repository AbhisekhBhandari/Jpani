import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { NavigationProps, RouteProps } from "@/shared/routes/stack";
import ImageRestaurant from "@/modules/private/branchDetail/components/imageRestaurant";
import InfoRestaurant from "@/modules/private/branchDetail/components/infoRestaurant";
import CreateTextField from "./components/createTextField/index";
import { normalize } from "@/shared/helpers";
import { osName } from "expo-device";
import { supabase } from "@/shared/lib/supabase";

interface AddBranchProps {
  route: RouteProps<"addBranches">;
  navigation: NavigationProps;
}

const AddBranch = ({ route, navigation }: AddBranchProps) => {
  const [openInfo, setOpenInfo] = useState(false);
  if (!route.params) {
    return;
  }
  const { branch } = route.params;
  const branchname_info = {
    title: "general.ask_branch_name",
    description: "general.branch_name_description",
  };

  const branchaddress_info = {
    title: "general.ask_branch_address",
    description: "general.branch_address_description",
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View>
          <ImageRestaurant
            openInfo={() => setOpenInfo(!openInfo)}
            restaurant={branch}
          />
          <View style={{ marginVertical: normalize(20) }}>
            <CreateTextField info={branchname_info} navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddBranch;
