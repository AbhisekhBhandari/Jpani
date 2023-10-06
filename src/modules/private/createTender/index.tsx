import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import Header from "@/modules/private/createTender/components/header";
import Category from "./components/category";
import Items from "./components/items";
import Typography from "@/shared/components/typography";
import Modal from "../../../shared/components/modal";
import Tender from "./components/tender";

const ViewTenderButton = () => {
  return (
    <Typography
      style={{
        fontSize: normalize(16),
        fontWeight: "800",
        color: "white",
        backgroundColor: "black",
        width: "100%",
        textAlign: "center",
        paddingVertical: normalize(20),
      }}
    >
      View Tender
    </Typography>
  );
};

export default function CreateTender({ navigation }) {
  const [category, setCategory] = useState("all");
  const [selectedItems, setSelectedItems] = useState<Array<any>>([]);
  const [selectedItemsKey, setSelectedItemsKey] = useState<Array<any>>([]);

  const updateTender = (item) => {
    setSelectedItems((prev) => {
      const newItemList = [...prev];
      const indexOfTheSelectedItem = prev.findIndex(
        (obj) => obj.id === item.id
      );
      newItemList[indexOfTheSelectedItem] = item;
      return newItemList;
    });
  };

  const removeItemfromTender = (itemId) => {
    const newItemList = selectedItems.filter((obj) => obj.id !== itemId);
    const newItemKeyList = selectedItemsKey.filter((keys) => keys !== itemId);
    setSelectedItems(newItemList);
    setSelectedItemsKey(newItemKeyList);
  };

  const addToTender = (item) => {
    if (selectedItemsKey.includes(item.id)) {
      updateTender(item);
      return;
    }

    setSelectedItemsKey((prev) => {
      return [...prev, item.id];
    });
    setSelectedItems((prev) => [...prev, item]);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: normalize(40), backgroundColor: "white" }}
    >
      <View style={styles.body}>
        <Header />
        <Category currentCategory={category} setCategory={setCategory} />
        <Items
          selectedItems={selectedItems}
          currentCategory={category}
          navigation={navigation}
          addToTender={addToTender}
          selectedItemsKey={selectedItemsKey}
        />
        <View
          style={{
            position: "absolute",
            bottom: normalize(20),
            marginHorizontal: "4%",
            width: "92%",
            borderRadius: normalize(12),
            overflow: "hidden",
          }}
        >
          <Modal
            button={<ViewTenderButton />}
            height={450}
            showBottomBtn={true}
            bottomText="Create a Tender"
            bottomClickHandler={() => {
              // THis should contain a function that creates a tender
            }}
          >
            <Tender
              items={selectedItems}
              removeItemFromTender={removeItemfromTender}
            />
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
}
