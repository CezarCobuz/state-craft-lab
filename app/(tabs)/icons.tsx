import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useIconStore } from "@/store/store";
import { isValidMaterialIcon } from "@/utils/validateIcon";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IconsScreen() {
  const { iconName, iconColor, numberOfIcons } = useIconStore();

  // Fallback to "star" if the icon name is invalid
  const validIconName = isValidMaterialIcon(iconName) ? iconName : "star";
  const iconsToRender = parseInt(numberOfIcons) || 0; // Convert here

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText style={styles.title}>Your Icons</ThemedText>

        <ThemedView style={styles.iconWrapper}>
          {Array.from({ length: iconsToRender }).map((_, index) => (
            <MaterialIcons
              key={index}
              name={validIconName}
              size={50}
              color={iconColor || "black"}
              style={styles.icon}
            />
          ))}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
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
