import { ScrollView, View } from "react-native";
import Typography from "@/shared/components/typography";
import React from "react";
import { styles } from "./styles";
import CustomizeMenu from "@/modules/private/restaurantDetail/components/customizeMenu";
import useMenu from "@/modules/private/restaurantDetail/hooks/useMenu";
import Employee from "@/shared/components/cards/employee";
import { IEmployee } from "@/shared/lib/interfaces";

export default function EmployeeContainer({
  employees,
}: {
  employees: IEmployee[];
}) {
  const { openCustomizeMenu, addProduct, toggleCustomizeMenu } = useMenu();

  return (
    <View>
      <View style={styles.containerMenu}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={[styles.item, styles.itemActive]}>
            <Typography style={[styles.textMenu, styles.textMenuActive]}>
              Employees
            </Typography>
          </View>
        </ScrollView>
      </View>
      <View style={styles.resultMenu}>
        {employees.map((employee) => (
          <Employee
            name={employee.employee.fullname}
            description={employee.role_description}
            role={employee.role}
            id={"0" + employee.id.toString()}
            key={employee.employee.id}
          />
        ))}
      </View>
      <CustomizeMenu onClose={toggleCustomizeMenu} show={openCustomizeMenu} />
    </View>
  );
}
