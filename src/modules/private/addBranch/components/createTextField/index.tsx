import { KeyboardAvoidingView, View } from "react-native";
import Input from "@/shared/components/input";
import React from "react";
import { osName } from "expo-device";
import { normalize } from "@/shared/helpers";
import ScreenInfo from "../screenInfo";
import { Button } from "@/shared/components/buttons";
import { supabase } from "@/shared/lib/supabase";
import { isLoading } from "expo-font";
import { ActivityIndicator } from "react-native";
import { semantic } from "@/shared/constants/colors";
interface PROPS {
  info: { title: string; description: string };
  navigation: any
}

export default function CreateTextField(props: PROPS) {
  const { info } = props;
  const [branch_name, setBranchName] = React.useState("");
  const [branch_address, setBranchAddress] = React.useState("");
  const [branch_manager, setBranchManager] = React.useState("");
  const [branch_name_error, setBranchNameError] = React.useState("");
  const [branch_address_error, setBranchAddressError] = React.useState("");
  const [branch_manager_error, setBranchManagerError] = React.useState("");
  const [isLoading, setisLoading] = React.useState<boolean>(false)
  

  const changeHandler = (
    type: "name" | "address" | "manager",
    value: string
  ) => {
    switch (type) {
      case "name":
        setBranchName(value);
        break;
      case "address":
        setBranchAddress(value);
        break;
      case "manager":
        setBranchManager(value);
        break;
    }
  };

  const addBranchHandler = async (
    address: string,
    name: string,
    manager: string
  ) => {
    setisLoading(true)
    const user = await supabase.auth.getUser();
    if (!user.data.user.id) return setisLoading(false);

    const { data, error } = await supabase.from("branches").insert([
      {
        location: address,
        manager: manager,
        restaurant_id: user.data.user.id,
      },
    ]);
    setisLoading(false)
    if (error) {
      setisLoading(false)
      console.log(error);
      setBranchManagerError("Failed to add branch");
      return 
    }
    props.navigation.navigate('tab')
  };
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={osName.toLowerCase() === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={600}
        style={{
          flex: 1,
          paddingHorizontal: normalize(24),
        }}
      >
        <View>
          <ScreenInfo title={info.title} description={info.description} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Input
              onChangeText={(text) => changeHandler("name", text)}
              value={branch_name}
              error={branch_name_error}
              placeholder="general.enter_branch_name"
            />

            <Input
              onChangeText={(text) => changeHandler("address", text)}
              value={branch_address}
              error={branch_address_error}
              placeholder="general.enter_branch_address"
            />

            <Input
              onChangeText={(text) => changeHandler("manager", text)}
              value={branch_manager}
              error={branch_manager_error}
              placeholder="general.add_branch_manager"
            />
          </View>
        </View>
        <View>
          <View style={{ marginBottom: normalize(18) }}></View>
          {isLoading ? 
                <View style={{
                  backgroundColor: semantic.background.dark,
                  paddingHorizontal: normalize(18),
                  paddingVertical: normalize(14),
                  borderRadius: normalize(8),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ActivityIndicator size="small" color={"#ffffff"} />
                </View>:
                
          
          <Button
            onPress={() => {
              let error_status = false;
              if (branch_address.length < 3) {
                setBranchAddressError("general.branch_address_error");
                error_status = true;
              }
              if (branch_name.length < 3) {
                setBranchNameError("general.branch_name_error");
                error_status = true;
              }
              if (branch_manager.length < 3) {
                setBranchManagerError("general.branch_manager_error");
                error_status = true;
              }

              if (error_status) return;

              addBranchHandler(branch_address, branch_name, branch_manager);
            }}
            title="general.continue"
          />
        }
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
