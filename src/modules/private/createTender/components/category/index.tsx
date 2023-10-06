import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import { CATEGORIES } from "../../constants";

export default function Category({ currentCategory, setCategory }) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        {CATEGORIES.map((category) => (
          <Pressable
            key={category.key}
            onPress={() => setCategory(category.key)}
          >
            <View style={styles.btn}>
              <View
                style={
                  currentCategory === category.key
                    ? [styles.imageContainer, styles.activeImageContainer]
                    : [styles.imageContainer]
                }
              >
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={category.image}
                />
              </View>
              <Text
                style={
                  currentCategory === category.key
                    ? [styles.activeText, styles.text]
                    : [styles.text]
                }
              >
                {category.name}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
