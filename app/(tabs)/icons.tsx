import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useIconStore } from "@/store/store";
import { isValidMaterialIcon } from "@/utils/validateIcon";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IconsScreen() {
  const { iconName, iconColor, numberOfIcons } = useIconStore();

  const validIconName = isValidMaterialIcon(iconName) ? iconName : "star";
  const iconsToRender = parseInt(numberOfIcons.toString()) || 0;

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText style={styles.title}>Your Icons</ThemedText>

      <FlatList
        data={Array.from({ length: iconsToRender })}
        keyExtractor={(_, index) => `${validIconName}-${index}`}
        numColumns={4}
        contentContainerStyle={styles.iconWrapper}
        renderItem={() => (
          <MaterialIcons
            name={validIconName}
            size={50}
            color={iconColor || "black"}
            style={styles.icon}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  iconWrapper: {
    justifyContent: "center",
  },
  icon: {
    margin: 8,
    flex: 1,
    textAlign: "center",
  },
});
