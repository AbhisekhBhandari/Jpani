import { useState } from "react";
import { ItemSectionProfile } from "@/modules/private/profile/components/item";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import { Linking } from "react-native";

const DEFAULT_GENERAL_OPTIONS = [
  {
    id: "1",
    title: "Help Center",
    callback: () => Linking.openURL("https://tamwenat.com/"),
  },
  {
    id: "2",
    title: "Privacy Policy",
    callback: () => Linking.openURL("https://tamwenat.com/"),
  },
  {
    id: "3",
    title: "Terms & Conditions",
    callback: () => Linking.openURL("https://tamwenat.com/"),
  },
];
export default function useProfile() {
  const navigation = useNavigation<NavigationProps>();
  const [settingsOptions] = useState<ItemSectionProfile[]>([
    {
      id: "1",
      title: "Order History",
      callback: () => navigation.navigate("orders"),
    },
    {
      id: "2",
      title: "Manage Payment",
      callback: toggleOpenPaymentMethod,
    },
    {
      id: "3",
      title: "Change Language",
      callback: () => navigation.navigate("changeLanguage"),
    },
  ]);

  const [generalOptions] = useState<ItemSectionProfile[]>(
    DEFAULT_GENERAL_OPTIONS
  );
  const [openPaymentMethod, setOpenPaymentMethod] = useState(false);
  function toggleOpenPaymentMethod() {
    setOpenPaymentMethod(!openPaymentMethod);
  }
  return {
    settingsOptions,
    generalOptions,
    openPaymentMethod,
    toggleOpenPaymentMethod,
  };
}
