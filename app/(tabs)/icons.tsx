import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useIconStore } from "@/store/store";
import { isValidMaterialIcon } from "@/utils/validateIcon";

export default function IconsScreen() {
  const { iconName, iconColor, numberOfIcons } = useIconStore();

  // Fallback to "star" if the icon name is invalid
  const validIconName = isValidMaterialIcon(iconName) ? iconName : "star";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Icons</Text>

      <View style={styles.iconWrapper}>
        {Array.from({ length: numberOfIcons }).map((_, index) => (
          <MaterialIcons
            key={index}
            name={validIconName}
            size={50}
            color={iconColor || "black"}
            style={styles.icon}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  iconWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    margin: 8,
  },
});
