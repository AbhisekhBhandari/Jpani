import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import { ITEMS } from "../../constants";
import Typography from "@/shared/components/typography";
import Modal from "@/shared/components/modal";
import Counter from "../counter";
import { WhiteTick } from "@/shared/assets/icons";

enum TypeChange {
  minus = 0,
  plus = 1,
}

export const SingleItem = ({ item, addToTender, selected, defaultNote }) => {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState(defaultNote);

  function onQtyChange(type: number) {
    if (type === TypeChange.minus) {
      if (qty > 1) {
        setQty((prevState) => prevState - 1);
      }
      return;
    }
    setQty((prevState) => prevState + 1);
  }

  const Button = () => {
    return (
      <View style={styles.btn} key={item.id}>
        <View style={styles.imageContainer}>
          <Image resizeMode="cover" style={styles.image} source={item.image} />
        </View>
        <Text style={styles.text}>{item.name}</Text>
        <View
          style={{
            padding: normalize(5),
            height: normalize(20),
            width: normalize(20),
            position: "absolute",
            backgroundColor: selected ? "green" : "white",
            borderRadius: normalize(100),
            top: normalize(10),
            right: normalize(15),
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              tintColor: "white",
              height: "100%",
              width: "100%",
            }}
            source={WhiteTick}
          />
        </View>
      </View>
    );
  };

  const addItemToTender = () => {
    addToTender({ ...item, qty, note });
  };

  return (
    <Modal
      button={<Button />}
      height={450}
      showBottomBtn={true}
      bottomClickHandler={addItemToTender}
      bottomText={selected ? "Update Tender" : "Add to Tender"}
    >
      <View
        style={{ padding: normalize(20), gap: normalize(20), flex: 1 }}
        key={item.id}
      >
        <View style={{ gap: normalize(10) }}>
          <Typography style={{ fontSize: normalize(20), fontWeight: "800" }}>
            {item.name}
          </Typography>
          <Image
            source={item.image}
            style={{
              height: normalize(40),
              width: normalize(40),
              borderRadius: normalize(4),
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: normalize(10),
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#71717a",
              fontWeight: "400",
              fontSize: normalize(16),
            }}
          >
            {"Unit:"}
          </Text>
          <Typography style={{ textTransform: "capitalize", color: "#71717a" }}>
            {item.unit}
          </Typography>
        </View>
        <View style={{ gap: normalize(20) }}>
          <View style={{ gap: normalize(10) }}>
            <Typography style={{ fontWeight: "700", fontSize: normalize(16) }}>
              Quantity
            </Typography>
            <Counter count={qty} onChange={onQtyChange} />
          </View>

          <View>
            <Typography style={{ fontWeight: "700", fontSize: normalize(16) }}>
              Note
            </Typography>
            <TextInput
              value={note}
              maxLength={100}
              editable={true}
              onChangeText={(text) => {
                setNote(text);
              }}
              style={{
                borderWidth: 1,
                borderRadius: normalize(10),
                borderColor: "#E9E9E9",
                fontSize: normalize(16),
                height: normalize(70),
                textAlignVertical: "top",
                padding: normalize(10),
                paddingVertical: normalize(10),
                marginBottom: normalize(20),
                marginTop: normalize(10),
              }}
              onPressIn={() => {}}
              multiline={true}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default function Items({
  currentCategory,
  navigation,
  addToTender,
  selectedItemsKey = [],
  selectedItems = [],
}) {
  const currentList = ITEMS.filter(
    (item) => currentCategory === "all" || item.type === currentCategory
  );

  const renderList = ({ item }: { item: (typeof ITEMS)[0] }) => {
    const isSelected = selectedItemsKey.includes(item.id);
    let defaultNote = "";
    if (isSelected) {
      const indexOfTheSelectedItem = selectedItems.findIndex(
        (obj) => obj.id === item.id
      );
      defaultNote = selectedItems[indexOfTheSelectedItem];
    }
    return (
      <SingleItem
        item={item}
        addToTender={addToTender}
        selected={isSelected}
        defaultNote={defaultNote}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      numColumns={3}
      data={currentList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderList}
    ></FlatList>
  );
}
