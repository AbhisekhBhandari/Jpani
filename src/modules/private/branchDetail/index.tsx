import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { NavigationProps, RouteProps } from "@/shared/routes/stack";
import ImageRestaurant from "@/modules/private/branchDetail/components/imageRestaurant";
import InfoRestaurant from "@/modules/private/branchDetail/components/infoRestaurant";
import ButtonSheet from "@/shared/components/buttonSheet";
import Info from "@/modules/private/branchDetail/components/info";
import { Button } from "@/shared/components/buttons";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import { supabase } from "@/shared/lib/supabase";
import { IBranchData, IEmployee } from "@/shared/lib/interfaces";
import EmployeeContainer from "@/modules/private/branchDetail/components/EmployeeSection";

interface branchDetailProps {
  route: RouteProps<"branchDetail">;
  navigation: NavigationProps;
}
const BranchDetail = ({ route, navigation }: branchDetailProps) => {
  const [openInfo, setOpenInfo] = useState(false);
  const [branchData, setBranchData] = useState<IBranchData>(null);
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  if (!route.params) {
    return;
  }
  const { branch } = route.params;

  useEffect(() => {
    async function GetBranch() {
      const { data }: { data: IBranchData[] } = await supabase
        .from("branches")
        .select("*")
        .eq("id", branch.id);
      if (data) {
        setBranchData(data[0]);
      }
    }

    async function GetEmployees() {
      const { data, error }: { data: any; error: any } = await supabase
        .from("employees")
        .select(
          `role, role_description, id, employee(fullname, id)
          `
        )
        .eq("branch_id", branch.id);
      if (!error && data.length > 0) setEmployees(data);
      console.log(data, "join table data");
    }

    GetBranch();
    GetEmployees();
  }, [branch.id]);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: normalize(40) }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View>
          <ImageRestaurant
            openInfo={() => setOpenInfo(!openInfo)}
            restaurant={branch.image}
          />
          <View>
            {branchData && (
              <InfoRestaurant
                branchManager={branchData.manager}
                location={branchData.location}
              />
            )}
          </View>
          <EmployeeContainer employees={employees} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BranchDetail;
