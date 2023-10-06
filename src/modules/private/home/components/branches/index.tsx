import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import Typography from "@/shared/components/typography";
import List from "@/shared/components/list";
import { Restaurant } from "@/shared/components/cards";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import { Button } from "@/shared/components/buttons";
import ButtonAuto from "@/shared/components/buttons/buttonAuto";
import Icon from "@/shared/components/icon";
import { Plus } from "@/shared/assets/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import { supabase } from "@/shared/lib/supabase";
import { IBranchData } from "@/shared/lib/interfaces";
import BranchCard from "./branchCard";

interface IBranchInformation { }

export default function Branches() {
  const navigation = useNavigation<NavigationProps>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [branches, setBranches] = React.useState<IBranchData[]>([]);
  const [userId, setUserId] = React.useState<null | string>(null);
  function goToAddBranches() {
    navigation.navigate("addBranches", {
      branch: {
        image: "https://i.ibb.co/K6nkssp/image-201.png",
      },
    });
  }

  useEffect(() => {
    async function getBranches() {
      try {
        setIsLoading(true)
        const { data } = await supabase.auth.getUser();
        if (data.user.id) {
          setUserId(data.user.id);
          const response = await supabase
            .from("branches")
            .select("*")
            .eq("restaurant_id", data.user.id);
          if (response.error || !response.data) return;
          setBranches(response.data);
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    try {
      getBranches();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  async function addBranches(branchInformation: IBranchInformation) {
    if (userId) {
      const response = await supabase.from("branches").insert([
        {
          name: "Sucursal 1",
          address: "Av. 1",
          phone: "123456789",
          restaurant_id: userId,
        },
      ]);
    }
  }


  return (
    <View style={{ marginTop: normalize(1), marginBottom: normalize(80) }}>
      <View
        style={{
          paddingVertical: normalize(10),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: normalize(3),
        }}
      >
        <Typography style={styles.title}>general.branches</Typography>
        <ButtonAuto
          onPress={goToAddBranches}
          rightIcon={<Icon icon={Plus} />}
          title={"general.addBranch"}
        />
      </View>
      {isLoading ?
        <View style={{ height: normalize(80), alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size={"small"} color={"#000"} />
        </View>
        :
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View>
            <List
              data={branches}
              rows={3}
              renderItem={(item: IBranchData) => {
                return (
                  <View key={item.id} style={styles.container}>
                    <BranchCard
                      closesInTime={'2hrs'}
                      location={item.location}
                      id={item.id.toString()}
                      managerName={item.manager}
                    />
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>}
    </View>
  );
}